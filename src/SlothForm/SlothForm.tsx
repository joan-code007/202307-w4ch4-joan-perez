import "./SlothForm.css";

const SlothForm = (): React.ReactElement => {
  return (
    <form className="form">
      <label htmlFor="form-name">Name:</label>
      <input type="text" id="name" />

      <label htmlFor="form-picture">Image Url</label>
      <input type="picture" id="picture" />

      <label htmlFor="form-finguers">Number of finguers</label>
      <input type="fingers" id="finguers" />
    </form>
  );
};

export default SlothForm;
