import Input from "./Input";
import Review from "./Review";

const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="font-elec text-2xl font-black">Overall Rating</h1>

      <div>
        <Review />
        <p className="font-sm font-normal">Click to rate</p>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      />

      <div>
        <p>Would you like recommend this product to a friend?</p>
        <div className="mt-4 flex items-center gap-8">
          <div className="flex items-center gap-x-1">
            <input
              className="mr-1 mt-1 scale-125 cursor-pointer accent-black"
              type="radio"
              id="yes"
              name="choose"
              value="yes"
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="mt-1 scale-125 cursor-pointer accent-black"
              type="radio"
              id="no"
              name="choose"
              value="no"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since i bought this a month ago, it has been used a lot. What i like best/ What is worst about this product is ..."
        type="textarea"
      />

      <div className="flex gap-x-4">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>
        <div className="grow">
          <Input
            title="Email address ( will not be published )"
            placeholder="Example: your@example.com"
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          className="mr-1 mt-1 scale-125 cursor-pointer accent-black"
          type="radio"
          id="accept"
          name="accept"
          value="accept"
        />
        <label htmlFor="accept">
          I accept the <u>terms and conditions</u>
        </label>
      </div>
      <p className="text-sm font-semibold">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </p>
      <button className="text-md rounded-md bg-[#121633] p-4 py-2 font-bold text-white hover:bg-blue-600">
        Submit product review
      </button>
    </div>
  );
};

export default ReviewForm;
