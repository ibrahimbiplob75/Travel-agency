
import cover from "../../assets/winner-removebg-preview.png"
const Home = () => {
    return (
      <div>
        <div className="w-full m-auto mt-8">
          <div className="hero-content  text-center">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">Where to GO ?</h1>
              <div className="mb-5">
                <div role="tablist" className="tabs tabs-lifted tabs-lg">
                  <a role="tab" className="tab w-32 ">
                    Search All
                  </a>
                  <a role="tab" className="tab ">
                    Hotels
                  </a>
                  <a role="tab" className="tab tab-active">
                    Agency
                  </a>
                  <a role="tab" className="tab">
                    Ticket
                  </a>
                  <a role="tab" className="tab">
                    Restuarent
                  </a>
                </div>
              </div>

              <div className="form-control ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input  text-black input-bordered w-24 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="hero bg-base-100 h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={cover} className="max-w-sm rounded-lg" />
              <div>
                <h1 className="text-5xl font-bold">
                  Chance a Free Tripe winner!
                </h1>
                <p className="py-6">
                  simple step to complete and win a Free Tripe form Travel Book
                  . Lets start and grape the opportunity of free trip.
                </p>
                <button className="btn btn-primary">Get Free!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;