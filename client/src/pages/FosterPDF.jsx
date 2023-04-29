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
        input8: '',
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
        input8: Yup.string().required(),
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

      const [selectoption, setSelectedOption] = useState('');

      const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
      };

      const generatePDF = (values) => {
        const doc = new jsPDF('p', 'pt');
        doc.addFont('helvetica', 'normal');
        doc.text(225, 30,"FOSTER CONTRACTS")
        doc.text(20, 80,"Name of pet/s you are interested in fostering:")
        doc.text(20, 100, values.input);

        doc.text(20, 130,"Full Name:")
        doc.text(20, 150, values.input2);

        doc.text(20, 180,"Age")
        doc.text(20, 200, values.input3);

        doc.text(20, 230,"Nationality")
        doc.text(20, 250, values.input4);

        doc.text(20, 280,"Occupation")
        doc.text(20, 300, values.input5);

        doc.text(20, 330,"Email")
        doc.text(20, 350, values.input6);

        doc.text(20, 380,"Phone #")
        doc.text(20, 400, values.input7);

        doc.text(20, 430,"Address")
        doc.text(20, 450, values.input8);

        doc.text(20, 480,"What type of home do you live in? *")
        doc.text(20, 500, selectoption);

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
            <label htmlFor="input">Name of pet/s you are interested in fostering: *</label>
            <Field
              id="input"
              name="input"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
            <label className="text-sm block font-normal">If more than one, please separate by a comma.</label>
          </div>

          <div className="mb-4">
            <label htmlFor="input2">Full Name *</label>
            <Field
              id="input2"
              name="input2"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
              placeholder="LN,FN,MI"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="input3">Age *</label>
            <Field
              id="input3"
              name="input3"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input4">Nationality *</label>
            <Field
              id="input4"
              name="input4"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input5">Occupation *</label>
            <Field
              id="input5"
              name="input5"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input6">Email *</label>
            <Field
              type="email"
              id="input6"
              name="input6"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input7">Phone # *</label>
            <Field
              type="tel"
              id="input7"
              name="input7"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input8">Address*</label>
            <Field
              type="address"
              id="input8"
              name="input8"
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="input9">What type of home do you live in? *</label>
            <select
              value={selectoption}
              onChange={handleSelectChange}
              className="focus:outline-none focus:shadow-outline border rounded-lg py-2 px-3 w-full"
            >            
            <option value="Iownmyhouse">I own my house</option>
            <option value="Imrentingmyhouse">I'm renting my house</option>
            <option value="Iownmyondo">I own my condo</option>
            </select>

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