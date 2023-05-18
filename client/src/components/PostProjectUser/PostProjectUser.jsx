import React from 'react'
import { Link } from 'react-router-dom'

const PostProjectUser = () => {
  return (
    <div className='grid grid-col w-full'>
        <Link className="text-xl my-4 hover:underline">
          Projeto Carbon Free
        </Link>
        <span className="text-base text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          incidunt sequi ex ipsa vero accusantium quae excepturi reiciendis. Aut
          accusamus aliquid nihil non similique, aperiam eaque porro deleniti
          ullam tempora? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis, tenetur? Error, quod eligendi aperiam molestiae dicta non
          delectus eveniet voluptatem culpa voluptates modi praesentium fugiat
          repudiandae! Sit perspiciatis architecto at!
        </span>
        <div className="bg-img-project bg-cover w-full h-[250px] rounded-md mt-4"></div>
        <div className="flex items-center mt-4">
          <div className="flex">
            <span className="text-lg">Categoria:</span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Conservação ambiental
            </span>
          </div>
        </div>
    </div>
  )
}

export default PostProjectUser
