import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Maxwell Poffenbarger",
      title: "iOS Instructor Devmountain",
      img:
        "https://media-exp3.licdn.com/dms/image/C4D03AQFImPmlX2DX9Q/profile-displayphoto-shrink_400_400/0/1588112804290?e=1632355200&v=beta&t=H0_3TDCk9QwJI_NAEAcd1j39SRlA-0ifwWkCOUsQko0",
      icon: "assets/linkedin.png",
      desc:
        "James is a tireless worker, fun personality, and great programmer.",
    },
    {
      id: 2,
      name: "Scott Sutherland",
      title: "Web Developer Blenderbottle",
      img:
        "https://media-exp3.licdn.com/dms/image/C4D03AQEPZkRcSBqrlg/profile-displayphoto-shrink_400_400/0/1571193969660?e=1632355200&v=beta&t=n2yAF85ScnefJ2bzpn8ReJrq4kwa5tB9ruukwd3wtlo",
      icon: "assets/linkedin.png",
      desc:
        "James is a world class talent! His hard work is only matched by his high iq. A great team player gets along with people from all different backgrounds",
      featured: true,
    },

    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/linkedin.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
