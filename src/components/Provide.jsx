import { CircleArrow } from "../assets";
import { arrayOfObjects } from "../assets/data";

const Provide = () => {
  return (
    <div>
      <div>
        <h2>
          We Provide <br />
          Fresh Agro Product
        </h2>
        <div>
          <p>
            Over the years, our commitment to sustainable farming methods and
            innovation has allowed us to grow into the trusted agricultural hub
            we are today.
          </p>
          <div className="flex  items-center pr-2">
            <button className="px-8 py-3 border-[1px] border-black  text-sm rounded-full">
              Contact us
            </button>
            <CircleArrow />
          </div>
        </div>
      </div>
      <div className="">
        {arrayOfObjects?.map((items) => (
          <div key={items.title}>
            <img src={items.image} alt={items.title} />
            <div>
              <h3>{items.title}</h3>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provide;
