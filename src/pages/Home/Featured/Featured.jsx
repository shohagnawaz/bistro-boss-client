import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-8">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex items-center justify-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam adipisci 
                        excepturi! Labore similique vitae quisquam voluptatum assumenda facilis maiores. 
                        Molestias voluptatem earum, est, excepturi suscipit autem laboriosam a tempora 
                        nulla facilis architecto odio placeat reprehenderit, illum officiis ipsum doloremque? 
                        Consequatur eaque sit corrupti vel eum quos nulla praesentium alias.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
