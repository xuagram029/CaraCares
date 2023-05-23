import { useState } from "react";
import { jsPDF } from "jspdf";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FosterPDF() {
  const initialValues = {
    input: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    input12: "",
    input13: "",
    input14: "",
    input15: "",
    input16: "",
    input17: "",
    input18: "",
  };

  const validationSchema = Yup.object().shape({
    input: Yup.string().required(),
    input2: Yup.string().required(),
    input3: Yup.string().required(),
    input4: Yup.string().required(),
    input5: Yup.string().required(),
    input6: Yup.string().required(),
    input7: Yup.string().required(),
    input8: Yup.string().required(),
    input9: Yup.string().required(),
    input10: Yup.string().required(),
    input11: Yup.string().required(),
    input12: Yup.string().required(),
    input13: Yup.string().required(),
    input14: Yup.string().required(),
    input15: Yup.string().required(),
    input16: Yup.string().required(),
    input17: Yup.string().required(),
    input18: Yup.string().required(),
  });

  //images
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddImage = (e) => {

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = () => {
        const selectedWidth = 100; // Adjust the width for selection as needed
        const selectedHeight = (selectedWidth / image.width) * image.height;

        const pdfWidth = 200; // Adjust the width for PDF as needed
        const pdfHeight = (pdfWidth / image.width) * image.height;

        const outputWidth = 10 * pdfWidth; // Adjust the desired width in the PDF
        const outputHeight = 10 * pdfHeight; // Adjust the desired height in the PDF

        const imageObj = {
          dataURL: e.target.result,
          selectedWidth,
          selectedHeight,
          pdfWidth,
          pdfHeight,
          outputWidth,
          outputHeight,
        };
        if (images.length < 8) {
          setImages([...images, imageObj]);
          setErrorMessage("");
        } else {
          setErrorMessage("You have reached the maximum limit of 8 images.");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  //Select and option
  const [selectoption, setSelectedOption] = useState("");

  //radio form
  const [selectradio, setSelectRadio] = useState("");
  const [selectradio2, setSelectRadio2] = useState("");
  const [selectradio3, setSelectRadio3] = useState("");
  const [selectradio4, setSelectRadio4] = useState("");
  const [selectradio5, setSelectRadio5] = useState("");
  const [selectradio6, setSelectRadio6] = useState("");
  const [selectradio7, setSelectRadio7] = useState("");
  const [selectradio8, setSelectRadio8] = useState("");
  const [selectradio9, setSelectRadio9] = useState("");
  const [selectradio10, setSelectRadio10] = useState("");
  const [selectradio11, setSelectRadio11] = useState("");
  //select
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  //radio
  const handleRadioChange = (e) => {
    setSelectRadio(e.target.value);
  };

  const handleRadioChange2 = (e) => {
    setSelectRadio2(e.target.value);
  };

  const handleRadioChange3 = (e) => {
    setSelectRadio3(e.target.value);
  };
  const handleRadioChange4 = (e) => {
    setSelectRadio4(e.target.value);
  };
  const handleRadioChange5 = (e) => {
    setSelectRadio5(e.target.value);
  };
  const handleRadioChange6 = (e) => {
    setSelectRadio6(e.target.value);
  };
  const handleRadioChange7 = (e) => {
    setSelectRadio7(e.target.value);
  };
  const handleRadioChange8 = (e) => {
    setSelectRadio8(e.target.value);
  };
  const handleRadioChange9 = (e) => {
    setSelectRadio9(e.target.value);
  };
  const handleRadioChange10 = (e) => {
    setSelectRadio10(e.target.value);
  };
  const handleRadioChange11 = (e) => {
    setSelectRadio11(e.target.value);
  };

  const generatePDF = (values) => {
    const doc = new jsPDF("p", "pt");
    const selectedOptionText = document.querySelector(
      `select option[value="${selectoption}"]`
    ).textContent;

    const selectedRadio = document.querySelector(
      'input[name="radio"]:checked'
    ).value;
    const selectedRadio2 = document.querySelector(
      'input[name="radio2"]:checked'
    ).value;
    const selectedRadio3 = document.querySelector(
      'input[name="radio3"]:checked'
    ).value;
    const selectedRadio4 = document.querySelector(
      'input[name="radio4"]:checked'
    ).value;
    const selectedRadio5 = document.querySelector(
      'input[name="radio5"]:checked'
    ).value;
    const selectedRadio6 = document.querySelector(
      'input[name="radio6"]:checked'
    ).value;
    const selectedRadio7 = document.querySelector(
      'input[name="radio7"]:checked'
    ).value;
    const selectedRadio8 = document.querySelector(
      'input[name="radio8"]:checked'
    ).value;
    const selectedRadio9 = document.querySelector(
      'input[name="radio9"]:checked'
    ).value;
    const selectedRadio10 = document.querySelector(
      'input[name="radio10"]:checked'
    ).value;
    const selectedRadio11 = document.querySelector(
      'input[name="radio11"]:checked'
    ).value;

    doc.addFont("helvetica", "small");
    doc.text(225, 30, "FOSTER CONTRACTS");
    doc.text(20, 80, "Full Name:");
    doc.text(20, 100, values.input);

    doc.text(20, 130, "Address");
    doc.text(20, 150, values.input2);

    doc.text(20, 180, "Phone #");
    doc.text(20, 200, values.input3);

    doc.text(20, 230, "Email");
    doc.text(20, 250, values.input4);

    doc.text(20, 280, "Birth Date");
    doc.text(20, 300, values.input5);

    doc.text(20, 330, "Status");
    doc.text(20, 350, `${selectedRadio4}`);

    doc.text(20, 380, "Occupation");
    doc.text(20, 400, values.input6);

    doc.text(20, 430, "Social Media");
    doc.text(20, 450, values.input7);

    doc.text(20, 480, "What prompted you to adopt from PAWS?");
    doc.text(20, 500, `${selectedRadio5}`);

    doc.text(20, 530, "Have you adopted from PAWS before?");
    doc.text(20, 550, `${selectedRadio}`);

    doc.text(20, 580, "Alternate Contact's Name");
    doc.text(20, 600, values.input8);

    doc.text(20, 630, "Alternate Contact's Phone");
    doc.text(20, 650, values.input9);

    doc.text(20, 680, "Alternate Contact's Email");
    doc.text(20, 700, values.input10);

    //new page
    doc.addPage();
    doc.text(225, 30, "QUESTIONNAIRE");

    doc.text(20, 60, "What are you looking to adopt?");
    doc.text(20, 80, `${selectedRadio6}`);

    doc.text(20, 110, "Are you applying to adopt a specific shelter animal?");
    doc.text(20, 130, `${selectedRadio2}`);

    doc.text(
      20,
      160,
      "Describe your ideal pet, including its sex, age, appearance, temperament, etc."
    );
    doc.text(20, 180, values.input11);

    doc.text(20, 210, "What type of home do you live in? *");
    doc.text(20, 230, `${selectedOptionText}`);

    doc.text(20, 260, "Do you rent?");
    doc.text(20, 280, `${selectedRadio3}`);

    doc.text(20, 310, "What happens to your pet if or when you move?");
    doc.text(20, 330, values.input12);

    doc.text(20, 360, "Who do you live with?");
    doc.text(20, 380, `${selectedRadio7}`);

    doc.text(20, 410, "Are any members of your household allergic to animals?");
    doc.text(20, 430, `${selectedRadio8}`);

    doc.text(
      20,
      460,
      "Who will be responsible for feeding, grooming, and generally caring for your pet?"
    );
    doc.text(20, 480, values.input13);

    doc.text(
      20,
      510,
      "Who will be financially responsible for your pet’s needs (i.e. food, vet bills, etc.)?"
    );
    doc.text(20, 530, values.input14);

    doc.text(
      20,
      560,
      "Who will look after your pet if you go on vacation or in case of emergency?"
    );
    doc.text(20, 580, values.input15);

    doc.text(
      20,
      610,
      "How many hours in an average workday will your pet be left alone?"
    );
    doc.text(20, 630, values.input16);

    doc.text(
      20,
      660,
      "What steps will you take to introduce your new pet to his/her new surroundings?"
    );
    doc.text(20, 680, values.input17);

    doc.text(
      20,
      710,
      "Does everyone in the family support your decision to adopt a pet?"
    );
    doc.text(20, 730, `${selectedRadio9}`);

    doc.text(20, 760, "Please explain");
    doc.text(20, 780, values.input18);

    //new page
    doc.addPage();
    doc.text(225, 30, "QUESTIONNAIRE");

    doc.text(20, 60, "What are you looking to adopt?");
    doc.text(20, 80, `${selectedRadio10}`);

    doc.text(20, 110, "Are you applying to adopt a specific shelter animal?");
    doc.text(20, 130, `${selectedRadio11}`);

    //new page
    doc.addPage();
    doc.text(250, 30, "IMAGES");

    let remainingSpace = doc.internal.pageSize.getHeight() - 60;
    const spacing = 10; // Adjust the spacing value as needed

    images.forEach((imageObj, index) => {
      const { dataURL, pdfWidth, pdfHeight, outputWidth, outputHeight } = imageObj;

      if (remainingSpace < pdfHeight + spacing) {
        doc.addPage();
        remainingSpace = doc.internal.pageSize.getHeight() - 30;
      }

      doc.addImage(
        dataURL,
        "JPEG",
        25,
        doc.internal.pageSize.getHeight() - remainingSpace,
        pdfWidth,
        pdfHeight,
        outputWidth,
        outputHeight
      );

      remainingSpace -= pdfHeight + spacing;
    });

    doc.save("demo.pdf");
  };

  const handleSubmit = (values) => {
    generatePDF(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold xl:text-5xl text-blue-900 text-center m-12">
            FOSTER A PET APPLICATION FORM
          </h1>
          <div className="m-12 bg-blue-200 p-6 h-full w-[55%] mx-auto">
            <div className="mb-4">
              <label htmlFor="input">Full Name *</label>
              <Field
                id="input"
                name="input"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
                placeholder="Last Name, First Name, Middle Initial"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input2">Address: *</label>
              <Field
                id="input2"
                name="input2"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input3">Phone #: *</label>
              <Field
                id="input3"
                name="input3"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input4">Email *</label>
              <Field
                type="email"
                id="input4"
                name="input4"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input5">Birth Date *</label>
              <Field
                id="input5"
                name="input5"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">
                Status*
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio4"
                  value="Single"
                  checked={selectradio4 === "Single"}
                  onChange={handleRadioChange4}
                />{" "}
                Single
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio4"
                  value="Married"
                  checked={selectradio4 === "Married"}
                  onChange={handleRadioChange4}
                />{" "}
                Married
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio4"
                  value="Others"
                  checked={selectradio4 === "Others"}
                  onChange={handleRadioChange4}
                />{" "}
                Others
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="input6">Occupation *</label>
              <Field
                id="input6"
                name="input6"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="input7">Social Media *</label>
              <Field
                id="input7"
                name="input7"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
                placeholder="FB/Twitter/IG"
              />
              <p className="text-sm">Please type N/A if no social media</p>
            </div>

            <div className="mb-4">
              <label htmlFor="">
                What prompted you to adopt from PAWS? *
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio5"
                  value="Friends"
                  checked={selectradio5 === "Friends"}
                  onChange={handleRadioChange5}
                />{" "}
                Friends
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio5"
                  value="Website"
                  checked={selectradio5 === "Website"}
                  onChange={handleRadioChange5}
                />{" "}
                Website
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio5"
                  value="Social Media"
                  checked={selectradio5 === "Social Media"}
                  onChange={handleRadioChange5}
                />{" "}
                Social Media
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio5"
                  value="Others"
                  checked={selectradio5 === "Others"}
                  onChange={handleRadioChange5}
                />{" "}
                Others
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="">
                Have you adopted from PAWS before?*
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio"
                  value="Yes"
                  checked={selectradio === "Yes"}
                  onChange={handleRadioChange}
                />{" "}
                Yes
              </label>

              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  name="radio"
                  type="radio"
                  value="No"
                  checked={selectradio === "No"}
                  onChange={handleRadioChange}
                />{" "}
                No
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="input8">Alternate Contact *</label>
              <Field
                id="input8"
                name="input8"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
                placeholder="Last Name, First Name, Middle Initial"
              />
              <p className="text-sm">
                If the applicant is a minor, a parent or a guardian must be the
                alternate contact and co-sign the application.
              </p>
            </div>

            <div className="mb-4 flex mx-auto space-x-2">
              <div className="w-1/2">
                <label htmlFor="input9" className="text-left">
                  Phone #: *
                </label>
                <br />
                <Field
                  id="input9"
                  name="input9"
                  className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="input10" className="text-left">
                  Email *
                </label>
                <br />
                <Field
                  type="email"
                  id="input10"
                  name="input10"
                  className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
                />
              </div>
            </div>

            {/* NEW PDF PAGE */}
            <div className="mt-12 mb-12 mx-6">
              <h1 className="text-3xl">QUESTIONNAIRE</h1>
              <br />
              <p className="text-justify text-lg italic">
                In an effort to help the process go smoothly, please be as
                detailed as possible with your responses to the questions below.
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="">
                What are you looking to adopt? *
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio6"
                  value="Dog"
                  checked={selectradio6 === "Dog"}
                  onChange={handleRadioChange6}
                />{" "}
                Dog
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio6"
                  value="Cat"
                  checked={selectradio6 === "Cat"}
                  onChange={handleRadioChange6}
                />{" "}
                Cat
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio6"
                  value="Both"
                  checked={selectradio6 === "Both"}
                  onChange={handleRadioChange6}
                />{" "}
                Both
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio6"
                  value="Not Decided"
                  checked={selectradio6 === "Not Decided"}
                  onChange={handleRadioChange6}
                />{" "}
                Not Decided
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="">
                Are you applying to adopt a specific shelter animal?*
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio2"
                  value="Yes"
                  checked={selectradio2 === "Yes"}
                  onChange={handleRadioChange2}
                />{" "}
                Yes
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio2"
                  value="No"
                  checked={selectradio2 === "No"}
                  onChange={handleRadioChange2}
                />{" "}
                No
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="input11">
                Describe your ideal pet, including its sex, age, appearance,
                temperament, etc.*
              </label>
              <Field
                type="text"
                id="input11"
                name="input11"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="input99">
                What type of building do you live in? *
              </label>
              <select
                value={selectoption}
                onChange={handleSelectChange}
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              >
                <option value="option1">House</option>
                <option value="option2">Apartment</option>
                <option value="option3">Condo</option>
                <option value="option4">Others</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="">
                Do you rent?*
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio3"
                  value="Yes"
                  checked={selectradio3 === "Yes"}
                  onChange={handleRadioChange3}
                />{" "}
                Yes
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio3"
                  value="No"
                  checked={selectradio3 === "No"}
                  onChange={handleRadioChange3}
                />{" "}
                No
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="input12">
                What happens to your pet if or when you move? *
              </label>
              <Field
                type="text"
                id="input12"
                name="input12"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="">
                Who do you live with? *
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio7"
                  value="Living Alone"
                  checked={selectradio7 === "Living Alone"}
                  onChange={handleRadioChange7}
                />{" "}
                Living Alone
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio7"
                  value="Children over 18"
                  checked={selectradio7 === "Children over 18"}
                  onChange={handleRadioChange7}
                />{" "}
                Children over 18
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio7"
                  value="Roommate(s)"
                  checked={selectradio7 === "Roommate(s)"}
                  onChange={handleRadioChange7}
                />{" "}
                Roommate/s
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio7"
                  value="Spouse"
                  checked={selectradio7 === "Spouse"}
                  onChange={handleRadioChange7}
                />{" "}
                Spouse
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio7"
                  value="Children below 18"
                  checked={selectradio7 === "Children below 18"}
                  onChange={handleRadioChange7}
                />{" "}
                Children below 18
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio7"
                  value="Parents/Relatives"
                  checked={selectradio7 === "Parents/Relatives"}
                  onChange={handleRadioChange7}
                />{" "}
                Parents/Relatives
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="">
                Are any members of your household allergic to animals? *
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio8"
                  value="Yes"
                  checked={selectradio8 === "Yes"}
                  onChange={handleRadioChange8}
                />{" "}
                Yes
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio8"
                  value="No"
                  checked={selectradio8 === "No"}
                  onChange={handleRadioChange8}
                />{" "}
                No
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="input13">
                Who will be responsible for feeding, grooming, and generally
                caring for your pet? *
              </label>
              <Field
                type="text"
                id="input13"
                name="input13"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input14">
                Who will be financially responsible for your pet’s needs (i.e.
                food, vet bills, etc.)? *
              </label>
              <Field
                type="text"
                id="input14"
                name="input14"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input15">
                Who will look after your pet if you go on vacation or in case of
                emergency? *
              </label>
              <Field
                type="text"
                id="input15"
                name="input15"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input16">
                How many hours in an average workday will your pet be left
                alone? *
              </label>
              <Field
                type="text"
                id="input16"
                name="input16"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="input17">
                What steps will you take to introduce your new pet to his/her
                new surroundings? *
              </label>
              <Field
                type="text"
                id="input17"
                name="input17"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">
                Does everyone in the family support your decision to adopt a
                pet? *
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio9"
                  value="Yes"
                  checked={selectradio9 === "Yes"}
                  onChange={handleRadioChange9}
                />{" "}
                Yes
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio9"
                  value="No"
                  checked={selectradio9 === "No"}
                  onChange={handleRadioChange9}
                />{" "}
                No
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="input18">Please explain *</label>
              <Field
                type="text"
                id="input18"
                name="input18"
                className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              />
            </div>

            {/* NEW PDF PAGE */}

            <div className="mb-4">
              <label htmlFor="">
                Do you have other pets? *
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio10"
                  value="Yes"
                  checked={selectradio10 === "Yes"}
                  onChange={handleRadioChange10}
                />{" "}
                Yes
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio10"
                  value="No"
                  checked={selectradio10 === "No"}
                  onChange={handleRadioChange10}
                />{" "}
                No
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="">
                Have you had pets in the past? *
                <br />
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio11"
                  value="Yes"
                  checked={selectradio11 === "Yes"}
                  onChange={handleRadioChange11}
                />{" "}
                Yes
              </label>
              <label htmlFor="">
                <input
                  class="form-radio h-4 w-4 text-blue-600 m-4"
                  type="radio"
                  name="radio11"
                  value="No"
                  checked={selectradio11 === "No"}
                  onChange={handleRadioChange11}
                />{" "}
                No
              </label>
            </div>

            <div className="mb-4">
              <p className="font-medium mb-2">Please attach photos of your home. This has replaced our on-site ocular inspections. (Limit: 8)</p>
              <ul className="mt-6 mb-6 px-6">
                <li className="mt-[10px] list-disc">Front of the house</li>
                <li className="mt-[10px] list-disc">Street photo</li>
                <li className="mt-[10px] list-disc">Living room</li>
                <li className="mt-[10px] list-disc">Dining area</li>
                <li className="mt-[10px] list-disc">Kitchen</li>
                <li className="mt-[10px] list-disc">Bedroom/s (if you pet will have access)</li>
                <li className="mt-[10px] list-disc">Windows (if adopting a cat)</li>
                <li className="mt-[10px] list-disc">Front & backyard (if adopting a dog)</li>
              </ul>
              </div>




      <h1 className="text-2xl font-bold mb-4">Add Images (Limit: 8)</h1>
      <form>
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImage}
        />
          {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}
        <div className="flex flex-wrap">
          {images.map((imageObj, index) => (
            <div key={index} className="m-2">
              <img
                src={imageObj.dataURL}
                alt={`Image ${index + 1}`}
                width={imageObj.selectedWidth}
                height={imageObj.selectedHeight}
              />
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => handleDeleteImage(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </form>









          </div>

          <div className="flex justify-center p-12">
            <button
              type="submit"
              className="bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-2 px-8 rounded-lg mx-auto"
            >
              Generate PDF
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FosterPDF;