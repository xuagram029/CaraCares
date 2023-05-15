import { useState } from 'react';
import { jsPDF } from 'jspdf'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



function FosterPDF() {
    const initialValues = {
        input: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input20: '',
        file: null,
      };
    
      const validationSchema = Yup.object().shape({
        input: Yup.string().required(),
        input2: Yup.string().required(),
        input3: Yup.string().required(),
        input4: Yup.string().required(),
        input5: Yup.string().required(),
        input6: Yup.string().required(),
        input7: Yup.string().required(),
        input20: Yup.string().required(),
        file: Yup.mixed().required(),
        
      });

      const handleChange = (e, formik) => {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          formik.setFieldValue('file', reader.result);
        };
    
        reader.readAsDataURL(file);
      };

      //Select and option
      const [selectoption, setSelectedOption] = useState('');


      //radio form
      const [selectradio, setSelectRadio] = useState('');
      const [selectradio2, setSelectRadio2] = useState('');
      const [selectradio3, setSelectRadio3] = useState('');
      const [selectradio4, setSelectRadio4] = useState('');


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




      const generatePDF = (values) => {
        const doc = new jsPDF('p', 'pt');
        const selectedOptionText = document.querySelector(
          `select option[value="${selectoption}"]`
        ).textContent;

        const selectedRadio = document.querySelector('input[name="radio"]:checked').value;
        const selectedRadio2 = document.querySelector('input[name="radio2"]:checked').value;
        const selectedRadio3 = document.querySelector('input[name="radio3"]:checked').value;
        const selectedRadio4 = document.querySelector('input[name="radio4"]:checked').value;

        doc.addFont('helvetica', 'normal');
        doc.text(225, 30,"FOSTER CONTRACTS")
        doc.text(20, 80,"Full Name:")
        doc.text(20, 100, values.input);

        doc.text(20, 130,"Address")
        doc.text(20, 150, values.input2);

        doc.text(20, 180,"Phone #")
        doc.text(20, 200, values.input3);

        doc.text(20, 230,"Email")
        doc.text(20, 250, values.input4);

        doc.text(20, 280,"Birth Date")
        doc.text(20, 300, values.input5);

        doc.text(20, 330,"Status")
        doc.text(20, 350, `${selectedRadio4}`);

        doc.text(20, 380,"Occupation")
        doc.text(20, 400, values.input6);
        
        doc.text(20, 430,"Social Media")
        doc.text(20, 450, values.input7);

        doc.text(20, 480,"What type of home do you live in? *")
        doc.text(20, 500, `${selectedOptionText}`);
        
        doc.text(20, 530,"If not a home owner, do you have permission to keep pets?")
        doc.text(20, 550, `${selectedRadio}`);

        doc.text(20, 580,"How long have you lived here?")
        doc.text(20, 600, values.input20);

        doc.text(20, 630,"Does any member of your household have any known allergies to animals?")
        doc.text(20, 650, `${selectedRadio2}`);

        doc.text(20, 680,"Does any member of your household have any known allergies to animals?")
        doc.text(20, 700, `${selectedRadio3}`);

        doc.addImage(values.file, 'PNG', 330, 140, 300, 200);
        doc.save('demo.pdf');
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
            <div className='m-12 bg-blue-200 p-6 h-full w-[50%] mx-auto'>
            <div className="mb-4">
            <label htmlFor="input">Full Name *</label>
            <Field
              id="input"
              name="input"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              placeholder="LN,FN,MI"
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
            <label htmlFor="">Status*
            <br />
            <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" name='radio4' value="Single" checked={selectradio4 === 'Single'} onChange={handleRadioChange4}/> Single
            </label>
            <label htmlFor="">
            <input class="form-radio h-4 w-4 text-blue-600 m-4"  type="radio" name="radio4" value="Married" checked={selectradio4 === 'Married'} onChange={handleRadioChange4}/> Married
            </label>
            <label htmlFor="">
            <input class="form-radio h-4 w-4 text-blue-600 m-4"  type="radio" name="radio4" value="Others" checked={selectradio4 === 'Others'} onChange={handleRadioChange4}/> Others
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
            />
            <p className='text-sm'>Please type N/A if no social media</p>
          </div>


          <div className="mb-4">
            <label htmlFor="input99">What type of building do you live in? *</label>
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
            <label htmlFor="">If not a home owner, do you have permission to keep pets? *
            <br />
            <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" name='radio' value="Yes" checked={selectradio === 'Yes'} onChange={handleRadioChange}/> Yes
            </label>
            
            <label htmlFor="">
            <input class="form-radio h-4 w-4 text-blue-600 m-4" name="radio" type="radio" value="No" checked={selectradio === 'No'} onChange={handleRadioChange}/> No
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="input20">How long have you lived here? *</label>
            <Field
              type="text"
              id="input20"
              name="input20"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="">Does any member of your household have any known allergies to animals? *
            <br />
            <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" name='radio2' value="Yes" checked={selectradio2 === 'Yes'} onChange={handleRadioChange2}/> Yes
            </label>
            <label htmlFor="">
            <input class="form-radio h-4 w-4 text-blue-600 m-4"  type="radio" name="radio2" value="No" checked={selectradio2 === 'No'} onChange={handleRadioChange2}/> No
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="">Do all members of the family support your decision to foster a pet? *
            <br />
            <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" name='radio3' value="Yes" checked={selectradio3 === 'Yes'} onChange={handleRadioChange3}/> Yes
            </label>
            <label htmlFor="">
            <input class="form-radio h-4 w-4 text-blue-600 m-4"  type="radio" name="radio3" value="No" checked={selectradio3 === 'No'} onChange={handleRadioChange3}/> No
            </label>
          </div>


















          <div className="mb-4">
            <label htmlFor="file">Upload Image</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(e) => handleChange(e, formik)}
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>

            </div>

          
        <div className="flex justify-center p-12">
          <button type="submit" className="bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-2 px-8 rounded-lg mx-auto">
            Generate PDF
          </button>
        </div>

        </Form>
      )}
    </Formik>
  );
};

export default FosterPDF;