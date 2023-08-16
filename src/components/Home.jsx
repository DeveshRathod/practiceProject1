import React, { Fragment } from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <Fragment>
      <div className="home" id="home">
        <main>
          <h1>TechyStar.</h1>
          <p>Kaizoku ni Orewa Naru</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus quos natus voluptates commodi dicta, tempore architecto
            iure nostrum culpa magnam nisi cum minima quo in impedit possimus
            fugiat sequi error. Fuga nam saepe iste eius corrupti, odit quisquam
            ipsam rerum.
          </p>
        </div>
      </div>
      <diV className="about" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis
            cumque atque velit iusto eos nihil commodi voluptatum vitae ducimus
            ipsum odio similique enim doloribus, nostrum vel veniam magnam
            mollitia vero, provident tenetur nisi dolorem voluptatem. Error
            recusandae officiis quas hic repellendus ipsa culpa voluptate,
            assumenda, iure sed quia excepturi? Repellendus vitae velit
            doloremque impedit ipsam fugiat rem consequatur architecto,
            recusandae eaque voluptatum numquam dicta odio quis veniam!
            Cupiditate quia explicabo quasi similique. Voluptas pariatur
            cupiditate quam fuga vero eveniet eligendi velit natus. Harum
            debitis voluptatibus optio iste reiciendis libero numquam est
            facilis quo ipsa impedit laudantium beatae, eius repellendus?
          </p>
        </div>
      </diV>
      <div className="home4" id="brands">
        <div className="">
          <h1>Brands</h1>


          <article>
            <div style={{
              animationDelay : "0.3s"
              }
            }>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay : "0.5s"
              }
            }>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay : "0.7s"
              }
            }>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay : "0.9s"
              }
            }>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>

      </div>
    </Fragment>
  );
};

export default Home;
