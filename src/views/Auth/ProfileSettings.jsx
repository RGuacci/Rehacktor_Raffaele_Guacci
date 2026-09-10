import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import routes from "../../router/routes";
import { supabase } from "../../database/supabase";

function ProfileSettings() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const { profile, getUser ,updateProfile } = useContext(UserContext)

  const handleChange = (e) => {
    setFile(() => e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(() => imageUrl);
    }
  }, [file]);

  const handleAvatar = async (e) => {
  e.preventDefault();

  const fileExt = file.name.split(".").pop();
  const fileName = `${profile.id}${Math.random()}.${fileExt}`;

  const { data: uploadData, error: uploadError } =
    await supabase.storage
      .from("avatars")
      .upload(fileName, file);

  const { data: profileData, error: profileError } =
    await supabase
      .from("profiles")
      .upsert({
        id: profile.id,
        avatar_url: fileName,
      })
      .select();

  await getUser();
};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleSettings = async (data) => {
    updateProfile(data);
    navigate(routes.profile);
  };

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(handleSettings)}>
          <h1 className="font-electro mx-auto font-bold my-10 text-5xl">
            Aggiorna profilo
          </h1>

          <fieldset className="fieldset bg-nav-gray border-base-300 rounded-box w-xs border p-4">
            <label className="label">Nome</label>
            <input
              type="text"
              className="input"
              placeholder="Mario"
              {...register("first_name", {
                required: "Il nome è obbligatorio",
              })}
            />
            {errors.first_name && (
              <p className="text-red-500">{errors.first_name.message}</p>
            )}

            <label className="label">Cognome</label>
            <input
              type="text"
              className="input"
              placeholder="Rossi"
              {...register("last_name", {
                required: "Il cognome è obbligatorio",
              })}
            />
            {errors.last_name && (
              <p className="text-red-500">{errors.last_name.message}</p>
            )}

            <label className="label">Username</label>
            <input
              type="text"
              className="input"
              placeholder="Mario.Rossi"
              {...register("username", {
                required: "Il cognome è obbligatorio",
              })}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}

            <button className="btn btn-neutral mt-4">Modifica</button>
          </fieldset>
        </form>

        <form
          className="bg-nav-gray border-base-300 rounded-box w-xs border p-4"
          onSubmit={handleAvatar}
        >
          <input
            type="file"
            className="file-input file-input-lg w-full mb-5"
            onChange={handleChange}
          />
          <button className="btn btn-neutral mt-4">Carica Avatar</button>
        </form>
        <img src={preview} className="w-50"/>
      </main>
    </>
  );
}

export default ProfileSettings;
