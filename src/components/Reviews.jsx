import crown from "../assets/mansa-crown.png"

const Reviews = () => {
  const reviews = [
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      name: "Alice Johnson",
      review:
        "This product exceeded my expectations! The quality is top-notch, and delivery was super fast.",
    },
    {
      image:
        "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/1575445-orig-orig.jpg?1610134634",
      name: "Michael Brown",
      review:
        "Great value for the price. I’ve been using it for weeks now, and it works perfectly!",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Kenneth_T._Wang_Headshot_Square.png/640px-Kenneth_T._Wang_Headshot_Square.png",
      name: "Sophia Martinez",
      review:
        "I love this! It’s exactly as described and works like a charm. Highly recommend it!",
    },
    {
      image: "https://live.staticflickr.com/593/32529519645_8524814d51_c.jpg",
      name: "James Smith",
      review:
        "Not bad, but the instructions could have been clearer. Still, it gets the job done.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8kbJrn3bzyPApzw0ExxcGqb-9iCPxMgMWw&s",
      name: "Emma Wilson",
      review:
        "Absolutely fantastic! The customer service was amazing too. I’ll definitely be buying again.",
    },
    {
      image:
        "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/highres-mjb-8580-copy.jpg?1621876221",
      name: "Liam Davis",
      review:
        "Decent product overall, but I wish it came in more colors. Would still recommend it to others.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto border-b-2" id="reviews">
        <div className="flex justify-center"> <img src={crown} className="w-12 mt-5" alt="" /></div>
      <div className="mb-20 mt-5">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          REVIEWS
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          Hear what clients have to say
        </p>
        <div className="flex flex-wrap justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-[#D8BA67] p-10 mx-2 max-w-xs"
            >
              <p className="mb-4 text-2xl">{review.review}</p>
              <div className="flex items-center mt-4">
                <div>
                  <p className="text-lg fount-bold">{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
