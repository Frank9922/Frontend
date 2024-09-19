import { NavLink, useParams } from 'react-router-dom';
import { useGetMascotasQuery } from '../api';
import { HomeLayout } from '../page/HomeLayout';
import { CardMascota } from './components/CardMascota';
import marco from '../../public/m-m.png'
import { GiDogHouse } from 'react-icons/gi';


export const MascotaPage = () => {
  const { mascotaName } = useParams();
  const { data, isLoading, isError } = useGetMascotasQuery();

  const mascotas = data?.mascotas || [];
  const mascota = mascotas.find((mascota) => mascota.nombreFantasia === mascotaName)

  return (

    <HomeLayout>



      {
        isLoading ? 'true' :
        <div className='flex flex-col mx-[2.5%]'>

          <section className='my-[2.5%] mr-auto'>
          <ul className="flex items-center bg-primary px-6 py-2 rounded-full text-white">
            <li className="inline-flex items-center">
              <NavLink to='/mascotas' className="text-gray-600 hover:text-blue-500 flex justify-center items-center gap-2">

              <GiDogHouse/> Mascotas
                
              </NavLink>
              <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
            </li>

            <li className="inline-flex items-center">
              <span className="text-gray-600 hover:text-blue-500">

              {mascota.nombreFantasia}

              </span>
            </li>

    
          </ul>
          </section>

          <div className='flex min-h-[84vh]'>

              <section className='basis-3/5'>
                  <h1 className='text-4xl'>{mascota.nombreFantasia}</h1>
                  <p>{mascota.descripcion}</p>
                  <p>{mascota.edad}</p>
                  <p>{mascota.raza.name}</p>
                  <p>{ new Date(mascota.created_at).toLocaleDateString() }</p>

              </section>

              <section>
                <CardMascota displayNombre={false} hoverEffect={false} {...mascota}/>
              </section>

          </div>

        </div>
      }


    </HomeLayout>


  );
};