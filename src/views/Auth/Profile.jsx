import { useContext, useEffect, useState } from 'react';
import Ryu from '../../assets/Ryu.jpg';
import { UserContext } from '../../context/UserContext';
import routes from '../../router/routes';
import { Link } from 'react-router';
import { supabase } from '../../database/supabase';



function Profile() {

   const { user , profile } = useContext(UserContext);

   const [ avatarUrl, setAvatarUrl ] = useState();

   const downloadAvatar = async() =>{
     if(profile && profile.avatar_url) {
        const { data, error } = await supabase.storage
        .from("avatars")
        .download(profile.avatar_url);
        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
       
     }
   }
  
   useEffect(() => {
    downloadAvatar();
 } , [profile]);


   return(
      
       <main className="h-screen">
         {user && profile && (
            <>
             <article className="mt-10 flex flex-col items-center">
                <img 
                src={ avatarUrl ?? Ryu }
                className="w-25 h-25 rounded-full"
                alt="Immagine di Profilo"
                />
                <h2 className="text-2xl font-bold mt-5">{ profile.first_name }</h2>
             </article>

             <section className="grid grid-cols-3 gap-4 px-20">
               <article className="bg-black text-nav-gray rounded-box p-10">
                <h3 className="font-bold">I Tuoi Dati :</h3>
                <p>Nome : { profile.first_name } { profile.last_name }</p>
                <p>Username : { profile.username }</p>
                <p>Email : { user.email }</p>

                <Link className="btn btn-outline mt-3 text-white" to={routes.profile_settings}>
                   Impostazioni
                </Link> 

               </article>
             </section>
            </>
         )}
       </main>
      
    );
}

export default Profile;