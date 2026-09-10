import { useContext, useEffect, useState } from "react";
import Ryu from "../../assets/Ryu.jpg";
import { UserContext } from "../../context/UserContext";
import routes from "../../router/routes";
import { Link } from "react-router";
import { supabase } from "../../database/supabase";

function Profile() {
  const { user, profile } = useContext(UserContext);

  const [avatarUrl, setAvatarUrl] = useState();

  const downloadAvatar = async () => {
    if (profile && profile.avatar_url) {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(profile.avatar_url);
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    }
  };

  useEffect(() => {
    downloadAvatar();
  }, [profile]);

  return (
    <main className="min-h-screen px-4 py-10">
      {user && profile && (
        <div className="max-w-5xl mx-auto">
          <article className="flex flex-col items-center mb-10">
            <img
              src={avatarUrl ?? Ryu}
              className="w-25 h-25 rounded-full"
              alt="Immagine di Profilo"
            />

            <h2 className="text-2xl font-bold mt-5">{profile.first_name}</h2>
          </article>

          <section className="max-w-xl mx-auto">
            <article className="bg-base-300 rounded-box p-6 md:p-8">
              <h3 className="font-bold text-xl mb-5">I Tuoi Dati</h3>

              <div className="space-y-2">
                <p>
                  <span className="font-bold">Nome:</span> {profile.first_name}{" "}
                  {profile.last_name}
                </p>

                <p>
                  <span className="font-bold">Username:</span>{" "}
                  {profile.username}
                </p>

                <p className="break-all">
                  <span className="font-bold">Email:</span> {user.email}
                </p>
              </div>

              <Link
                className="btn btn-outline mt-5"
                to={routes.profile_settings}
              >
                Impostazioni
              </Link>
            </article>
          </section>
        </div>
      )}
    </main>
  );
}

export default Profile;
