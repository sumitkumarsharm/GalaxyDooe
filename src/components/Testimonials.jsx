import { ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { testimonialsData } from "../assets/assets";

export default function Testimonials() {

  return (
    <section className="container mx-auto py-20 px-6 md:px-20 lg:px-32" id="testimonial">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Projects{" "}
          <span className="underline underline-offset-4 decoration-blue-500 font-light">
            Completed
          </span>
        </h1>
        <p className="text-gray-500 mt-3 text-base sm:text-lg max-w-lg mx-auto">
          Crafting spaces and turning your dream house into reality.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-md p-8 w-80 text-center 
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-20 h-20 mx-auto rounded-full mb-5 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">{item.title}</p>

            <div className="flex justify-center text-yellow-400 my-3 text-lg">
              {"★".repeat(item.rating)}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}

        {/* Last "See All Projects" Card */}
       
      </div>
    </section>
  );
}
