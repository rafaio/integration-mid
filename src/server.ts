// pages/api/route.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const {
        accession_number,
        patient_id,
        patient_name,
        patient_birth_date,
        patient_sex,
        patient_cpf,
        patient_stature,
        patient_weight,
        requesting_physician,
        modality,
        requested_procedure_description,
        date_exam,
        time_exam,
        insurance_plan,
        company_id,
        study_code,
        company_name
      } = req.body;
  
      // Log the received data
      console.log('Received Data:');
      console.log(req.body);
  
      // Add or change names of the keys
      const newData = {
        folio: accession_number,
        facility_identifier: 'cdmed_madureira',
        patient_identifier: patient_id,
        study_code:study_code,
        study_name:requested_procedure_description,
        patient_name: patient_name,
        patient_birth_date: patient_birth_date,
        patient_gender: patient_sex,
        patientCPF: patient_cpf,
        patientStature: patient_stature,
        patientWeight: patient_weight,
        requestingPhysician: 'Medico',
        modality: modality,
        description: requested_procedure_description,
        examDate: date_exam,
        examTime: time_exam,
        insurancePlan: insurance_plan,
        companyId: company_id,
        companyName: company_name,
        physician_name: 'Medico',
        physician_first_surname: 'PADRAO',
        physician_last_surname: 'PADRAO',
        patient_first_surname:'-',
        patient_last_surname:'-'
      };
  
      // Log the modified data
      console.log('Modified Data:');
      console.log(newData);
  
      // You can make a POST request to another endpoint here
      // For example purposes, let's assume the endpoint is 'https://example.com/processData'
      fetch('https://middleware.evacenter.com/api/v1/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Token 61854ccc33652acbde241607a655cdc8e661c319"
        },
        body: JSON.stringify(newData),
      })
      .then(response => response.json())
      .then(data => {
        res.status(200).json({ message: 'Data processed successfully', updatedData: data });
      })
      .catch(error => {
        res.status(500).json({ message: 'Error processing data', error: error.message });
      });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
