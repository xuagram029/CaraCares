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
    
      const generatePDF = (values) => {
        const doc = new jsPDF('p', 'pt');
        doc.text(250,30, "Foster Contract")
        doc.text(20,80, "Name of pet/s you are interested in fostering:")
        doc.text(20, 100, values.input);
        doc.addFont('helvetica', 'normal');
        doc.text(20, 140, values.input2);
        doc.text(20, 180, values.input3);
        doc.text(20, 210, values.input4);
        doc.text(20, 240, values.input5);
        doc.text(20, 270, values.input6);
        doc.text(20, 300, values.input7);
        doc.addImage(values.file, 'PNG', 30, 140, 300, 200);
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
              placeholder="Last Name, First Name, Middle Initial"
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
              placeholder="09...."
            />
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