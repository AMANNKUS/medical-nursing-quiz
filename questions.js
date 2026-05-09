const questions = [
  {
    question: "A patient with diabetes mellitus presents with excessive thirst, frequent urination, and unexplained weight loss. What is the most likely explanation?",
    options: {
      A: "Hypoglycaemia",
      B: "Hyperglycaemia",
      C: "Fluid overload",
      D: "Renal failure"
    },
    correctAnswer: "B",
    rationaleCorrect: "Hyperglycaemia causes osmotic diuresis, leading to polyuria, polydipsia, dehydration, and weight loss.",
    rationalesIncorrect: {
      A: "Hypoglycaemia usually presents with sweating, tremors, hunger, confusion, and palpitations.",
      C: "Fluid overload usually presents with oedema and breathlessness, not weight loss and polyuria.",
      D: "Renal failure may affect urine output, but the symptoms here are more typical of hyperglycaemia."
    }
  },
  {
    question: "A patient with asthma is experiencing wheezing and shortness of breath. Which medication is commonly used for quick relief?",
    options: {
      A: "Salbutamol",
      B: "Atenolol",
      C: "Furosemide",
      D: "Omeprazole"
    },
    correctAnswer: "A",
    rationaleCorrect: "Salbutamol is a short-acting beta-2 agonist that relaxes bronchial smooth muscles and provides quick relief during asthma attacks.",
    rationalesIncorrect: {
      A: "",
      B: "Atenolol is a beta-blocker and may worsen bronchospasm in asthmatic patients.",
      C: "Furosemide is a diuretic used mainly for fluid overload, not acute asthma relief.",
      D: "Omeprazole is used for acid-related stomach conditions, not bronchospasm."
    }
  },
{
  question: "A 17-year-old student reports to the dental clinic with sore throat, offensive breath, painful swallowing, and bleeding gums. On examination, the nurse observes inflamed tonsillar area, ulcerated gums, and greyish slough around the mouth. The dentist suspects Vincent’s angina. Which nursing advice and treatment plan is most appropriate?",
  options: {
    A: "Give penicillin, amoxicillin, and advise frequent sugary fluid intake",
    B: "Give penicillin and encourage warm saline mouth washes",
    C: "Give penicillin, tetracycline, and advise the patient to avoid mouth rinsing"
  },
  correctAnswer: "B",
  rationaleCorrect: "Vincent’s angina is an acute ulcerative infection of the mouth and throat. Management includes appropriate antibiotics such as penicillin, good oral hygiene, and warm saline or salt-water mouth washes to reduce infection, cleanse the mouth, and promote healing.",
  rationalesIncorrect: {
    A: "Using two similar antibiotics together is not the usual first-line approach, and sugary fluids may worsen oral bacterial growth.",
    C: "Mouth rinsing is important. Avoiding oral cleansing may worsen infection and halitosis."
  }
},

{
  question: "A 19-year-old footballer is admitted for assessment after collapsing briefly during training. He has a family history of sudden death during exercise. Echocardiography confirms hypertrophic cardiomyopathy. Which instruction is most important for the nurse to reinforce before discharge?",
  options: {
    A: "Reduce fluid intake drastically to reduce cardiac workload",
    B: "Avoid intense competitive physical activity",
    C: "Expect sudden death mainly from complete heart block"
  },
  correctAnswer: "B",
  rationaleCorrect: "Hypertrophic cardiomyopathy causes abnormal thickening of the heart muscle, especially the ventricular septum. This can obstruct blood flow and predispose the patient to dangerous ventricular arrhythmias, especially during strenuous exercise. Therefore, patients are advised to avoid intense competitive sports or strenuous activity.",
  rationalesIncorrect: {
    A: "This is dangerous. Reducing intravascular volume can worsen obstruction because the heart needs adequate preload.",
    C: "Sudden death is more commonly due to serious ventricular arrhythmias, not complete AV block."
  }
},

{
  question: "A 19-year-old male student reports to the medical outpatient department with generalized fatigue and recurrent sinus infections. He says he frequently develops respiratory infections but has never been properly investigated. The nurse suspects an underlying immune problem. Which assessment finding would best support a diagnosis of antibody deficiency?",
  options: {
    A: "Recurrent bacterial respiratory tract infections",
    B: "Recurrent fractures after minor falls",
    C: "Recurrent convulsions during fever"
  },
  correctAnswer: "A",
  rationaleCorrect: "Frequent sinus infections, recurrent chest infections, and repeated bacterial infections may suggest an underlying immune deficiency, especially involving antibody production. Antibodies help the body fight bacterial infections, particularly in the respiratory tract.",
  rationalesIncorrect: {
    B: "This suggests bone fragility or metabolic bone disease, not primarily immune deficiency.",
    C: "This may suggest febrile seizures or neurological disorders, not antibody deficiency."
  }
},

{
  question: "A 20-year-old woman reports to the medical ward with difficulty keeping her eyes open by evening. She also complains of double vision when reading for long periods. Her symptoms improve after rest. The physician suspects myasthenia gravis. Which symptom is commonly seen first in this condition?",
  options: {
    A: "Weakness of eyelids and extraocular muscles",
    B: "Ascending symmetrical weakness from the legs",
    C: "Loss of pain and temperature sensation"
  },
  correctAnswer: "A",
  rationaleCorrect: "Myasthenia gravis commonly presents first with ocular symptoms, especially ptosis and diplopia. The condition affects neuromuscular transmission, causing muscle weakness that worsens with activity and improves with rest.",
  rationalesIncorrect: {
    B: "This is more typical of Guillain-Barré syndrome, not myasthenia gravis.",
    C: "Myasthenia gravis affects muscle strength, not sensory function. Sensation is usually normal."
  }
},

{
  question: "A 21-year-old woman of European descent is brought to the emergency unit with diarrhoea, abdominal pain, nausea, and vomiting after eating noodles and vegetables. She reports that similar symptoms occur whenever she eats foods made from wheat. The doctor suspects coeliac disease. Which nursing care is most appropriate?",
  options: {
    A: "Monitor fluid balance, vital signs, and educate her on a gluten-free diet",
    B: "Keep the patient strictly nil per os until all symptoms permanently disappear",
    C: "Encourage her to eat more wheat-based foods to build tolerance"
  },
  correctAnswer: "A",
  rationaleCorrect: "Coeliac disease is an immune-mediated disorder triggered by gluten found in wheat, barley, and rye. During an acute episode with diarrhoea and vomiting, the nurse should monitor fluid intake and output, vital signs, hydration status, and educate the patient to avoid gluten-containing foods.",
  rationalesIncorrect: {
    B: "Nil per os may be used temporarily in severe vomiting, but it is not the main long-term nursing care.",
    C: "This is dangerous. Gluten exposure worsens intestinal inflammation and symptoms in coeliac disease."
  }
},{
  question: "A 23-year-old man admitted to the medical ward is diagnosed with hepatitis D infection. During nursing care, he complains of generalized body weakness, itching of the skin, and poor appetite. Which nursing intervention should be given priority?",
  options: {
    A: "Maintain bed rest, prevent transmission, and manage pruritus",
    B: "Encourage unrestricted activity, manage weight, and give fatty meals",
    C: "Isolate the patient completely and restrict all oral fluids"
  },
  correctAnswer: "A",
  rationaleCorrect: "Hepatitis D affects the liver and usually occurs in association with hepatitis B. Nursing care includes bed rest during the acute phase, prevention of transmission through standard precautions, and management of symptoms such as pruritus, fatigue, nausea, and poor nutrition.",
  rationalesIncorrect: {
    B: "The patient needs rest, and fatty meals may worsen nausea and poor digestion.",
    C: "Strict isolation is not required. Standard precautions are important. Fluids should not be restricted unless medically indicated."
  }
},

{
  question: "A 24-year-old woman is receiving warfarin after treatment for deep vein thrombosis. During health education, she tells the nurse she has started taking estrogen-containing oral contraceptive pills. Which statement best explains the nurse’s concern?",
  options: {
    A: "Estrogen-containing oral contraceptives may reduce the effectiveness of warfarin",
    B: "Omeprazole is the most common drug that completely blocks warfarin action",
    C: "Vitamin E reduces bleeding risk in patients taking warfarin"
  },
  correctAnswer: "A",
  rationaleCorrect: "Warfarin is an anticoagulant used to prevent clot formation. Estrogen-containing oral contraceptives may increase the tendency for clot formation and may reduce the desired anticoagulant effect. The patient should be advised to inform the prescriber before using hormonal contraceptives.",
  rationalesIncorrect: {
    B: "Omeprazole does not usually decrease warfarin effectiveness. Some drugs may instead increase warfarin effect and bleeding risk.",
    C: "Vitamin E may increase bleeding tendency. It does not reduce bleeding risk."
  }
},

{
  question: "A 24-year-old man reports to the outpatient department with recurrent headache. He describes it as a severe, one-sided, throbbing headache that worsens when he walks. He also complains of nausea and inability to tolerate bright light. Neurological examination is normal. What is the most likely diagnosis?",
  options: {
    A: "Tension headache",
    B: "Cluster headache",
    C: "Migraine headache"
  },
  correctAnswer: "C",
  rationaleCorrect: "Migraine headache is commonly unilateral, throbbing, aggravated by movement, and associated with nausea, vomiting, photophobia, or phonophobia. A normal neurological examination is common in uncomplicated migraine.",
  rationalesIncorrect: {
    A: "Tension headache is usually bilateral, pressing or tight in nature, and not commonly associated with nausea or photophobia.",
    B: "Cluster headache is usually severe around one eye and may be associated with tearing, red eye, nasal congestion, or restlessness."
  }
},

{
  question: "A 24-year-old woman comes to the clinic with dizziness. She says that when she turned in bed and sat up, the room started spinning for about one minute and stopped. Similar episodes occur when she turns her head quickly. She has nausea but no hearing loss, tinnitus, limb weakness, or abnormal gait. What is the most likely cause?",
  options: {
    A: "Vestibular neuritis",
    B: "Benign paroxysmal positional vertigo",
    C: "Cerebellar infarction"
  },
  correctAnswer: "B",
  rationaleCorrect: "Benign paroxysmal positional vertigo is characterized by brief episodes of vertigo triggered by changes in head position. The episodes usually last less than one minute and may be associated with nausea.",
  rationalesIncorrect: {
    A: "Vestibular neuritis usually causes prolonged vertigo lasting hours to days, not brief attacks lasting seconds to one minute.",
    C: "Cerebellar infarction may present with severe dizziness, ataxia, abnormal gait, limb weakness, or other neurological signs."
  }
},

{
  question: "A 25-year-old obese woman diagnosed with gastroesophageal reflux disease is being prepared for discharge. She asks the nurse, “What complications can happen if I don’t manage this condition well?” Which nursing diagnosis is most appropriate?",
  options: {
    A: "Deficient knowledge related to lack of information about the disease process",
    B: "Risk for aspiration related to lack of information about the disease process",
    C: "Acute pain related to irritation of the oesophageal mucosa"
  },
  correctAnswer: "A",
  rationaleCorrect: "The patient’s main problem in the scenario is her concern and lack of adequate understanding about the disease and its complications. Therefore, the most appropriate nursing diagnosis is deficient knowledge.",
  rationalesIncorrect: {
    B: "Aspiration can occur in severe reflux, but the scenario focuses on the patient’s need for education.",
    C: "This diagnosis would be more appropriate if the patient was currently complaining of heartburn or chest discomfort."
  }
},

{
  question: "A 26-year-old farmer is brought to the emergency unit with difficulty opening his mouth, painful muscle spasms, and stiffness of the neck. He sustained a deep cut on his ankle while weeding two weeks ago. Tetanus is suspected. Which of the following is not a common clinical feature of tetanus?",
  options: {
    A: "Lockjaw",
    B: "Low-grade fever",
    C: "Low pulse rate"
  },
  correctAnswer: "C",
  rationaleCorrect: "Tetanus commonly presents with lockjaw, muscle rigidity, painful spasms, fever, sweating, and autonomic instability. Patients may develop tachycardia, not a low pulse rate.",
  rationalesIncorrect: {
    A: "Lockjaw, also called trismus, is a classic feature of tetanus.",
    B: "Fever may occur in tetanus due to infection and muscle activity."
  }
},

{
  question: "A 26-year-old woman reports to the outpatient department with fever, painful urination, frequency, and flank pain. She is diagnosed with acute pyelonephritis. Which organism is the most likely cause?",
  options: {
    A: "Klebsiella pneumoniae",
    B: "Escherichia coli",
    C: "Staphylococcus saprophyticus"
  },
  correctAnswer: "B",
  rationaleCorrect: "Escherichia coli is the most common causative organism of urinary tract infections, including acute pyelonephritis. It commonly ascends from the lower urinary tract to infect the kidneys.",
  rationalesIncorrect: {
    A: "Klebsiella can cause urinary tract infections but is less common than E. coli.",
    C: "This can cause uncomplicated cystitis, especially in young women, but E. coli remains the most common cause of pyelonephritis."
  }
},

{
  question: "A 26-year-old man reports to the STI clinic with a painless sore on the penis that has been present for several weeks. On examination, there is a single, non-tender ulcer and bilateral non-tender inguinal lymph node enlargement. His rapid plasma reagin test is negative. What is the most likely diagnosis?",
  options: {
    A: "Granuloma inguinale",
    B: "Herpes simplex infection",
    C: "Primary syphilis"
  },
  correctAnswer: "C",
  rationaleCorrect: "Primary syphilis commonly presents with a single painless chancre and non-tender lymph node enlargement. The rapid plasma reagin test may be negative in very early infection, so clinical findings are important.",
  rationalesIncorrect: {
    A: "Granuloma inguinale usually presents with a beefy-red ulcer that bleeds easily and typically does not cause prominent lymph node enlargement.",
    B: "Herpes usually presents with painful vesicles or painful ulcers, not a single painless ulcer."
  }
},

{
  question: "A 28-year-old sexually active woman comes to the clinic with vulval itching, burning sensation, and thick white vaginal discharge. On examination, the vulva is red and swollen. There is no cervical motion tenderness or uterine tenderness. What is the most common infectious cause of vulvovaginal pruritus?",
  options: {
    A: "Candidiasis",
    B: "Bacterial vaginosis",
    C: "Gonorrhoea"
  },
  correctAnswer: "A",
  rationaleCorrect: "Vulvovaginal candidiasis commonly presents with intense vulval itching, burning, redness, swelling, and thick white curd-like discharge. It is one of the most common infectious causes of vulvovaginal pruritus.",
  rationalesIncorrect: {
    B: "Bacterial vaginosis usually causes thin greyish discharge with a fishy odour, not thick white discharge with intense itching.",
    C: "Gonorrhoea may cause purulent discharge and pelvic symptoms, but it is not the most common cause of vulvovaginal pruritus."
  }
},

{
  question: "A 29-year-old man with a history of asthma reports to the emergency unit with sudden chest pain and difficulty breathing. His oxygen saturation is 90% on room air, pulse is 110 beats per minute, and examination shows reduced breath sounds on the right side of the chest. No wheezes or crackles are heard. Which investigation should be done first to confirm the likely diagnosis?",
  options: {
    A: "Chest radiograph",
    B: "Echocardiogram",
    C: "Helical computed tomography"
  },
  correctAnswer: "A",
  rationaleCorrect: "The findings suggest pneumothorax, especially sudden chest pain, dyspnoea, reduced oxygen saturation, and diminished breath sounds on one side. A chest radiograph is the best initial investigation to confirm the diagnosis in a stable patient.",
  rationalesIncorrect: {
    B: "This is used to assess heart structure and function, not the first-line test for suspected pneumothorax.",
    C: "CT scan may detect pneumothorax, but it is not usually the first investigation in a stable patient."
  }
},

{
  question: "A 30-year-old woman diagnosed with myasthenia gravis complains of double vision that worsens in the evening and difficulty swallowing food. Which medication is commonly used to improve muscle strength in this condition?",
  options: {
    A: "Pyridostigmine",
    B: "Sinemet",
    C: "Fibrinolytics"
  },
  correctAnswer: "A",
  rationaleCorrect: "Pyridostigmine is an anticholinesterase medication used in myasthenia gravis. It increases the availability of acetylcholine at the neuromuscular junction, improving muscle contraction and reducing weakness.",
  rationalesIncorrect: {
    B: "Sinemet is used in Parkinson’s disease, not myasthenia gravis.",
    C: "Fibrinolytics are used to dissolve blood clots in selected conditions such as acute stroke, myocardial infarction, or pulmonary embolism. They do not treat myasthenia gravis."
  }
},{
  question: "A 30-year-old unconscious patient is admitted to the emergency unit. The doctor orders an indwelling urinary catheter for urine specimen collection and continuous bladder drainage until the patient regains consciousness. Which nursing actions will help prevent catheter-associated urinary tract infection? I. Avoid unnecessary handling or manipulation of the catheter. II. Perform routine irrigation of the catheter to prevent infection. III. Empty the urine bag regularly through the drainage spout. IV. Maintain a sterile, closed urinary drainage system.",
  options: {
    A: "II and IV",
    B: "III and IV",
    C: "I, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "The nurse should avoid unnecessary manipulation of the catheter, empty the drainage bag through the drainage spout, and maintain a sterile closed drainage system. Routine irrigation is not recommended as a routine infection-prevention measure. CDC guidance emphasizes maintaining a closed urinary drainage system after aseptic catheter insertion.",
  rationalesIncorrect: {
    A: "Routine catheter irrigation is not done routinely to prevent infection.",
    B: "These are correct actions, but the answer is incomplete because avoiding unnecessary catheter manipulation is also important."
  }
},

{
  question: "A 30-year-old man with acute glomerulonephritis is being monitored on the medical ward. During routine observation, which finding should alert the nurse that the patient has hypertension?",
  options: {
    A: "Diastolic blood pressure of 95 mmHg",
    B: "Pulse deficit of 10 beats per minute",
    C: "Systolic blood pressure of 130 mmHg"
  },
  correctAnswer: "A",
  rationaleCorrect: "A diastolic pressure of 95 mmHg indicates high blood pressure and is clinically significant, especially in a patient with glomerulonephritis, where fluid retention and renal impairment may increase blood pressure.",
  rationalesIncorrect: {
    B: "Pulse deficit suggests an irregular heartbeat or poor peripheral pulse transmission, not hypertension.",
    C: "A systolic pressure of 130 mmHg alone is not the best answer in this NMC-style context. The diastolic pressure of 95 mmHg is more clearly hypertensive."
  }
},

{
  question: "A 32-year-old woman reports to the outpatient department complaining of weight loss, palpitations, sweating, and heat intolerance. She says she read about Graves’ disease online and is worried. Which clinical feature is most specific to Graves’ disease?",
  options: {
    A: "Heat intolerance",
    B: "Ophthalmopathy",
    C: "Fine tremor"
  },
  correctAnswer: "B",
  rationaleCorrect: "Ophthalmopathy, including protrusion of the eyes, eye irritation, lid retraction, and double vision, is specific to Graves’ disease. Heat intolerance and fine tremor may occur in many causes of hyperthyroidism, but eye involvement strongly points to Graves’ disease.",
  rationalesIncorrect: {
    A: "This is a general feature of hyperthyroidism, not specific to Graves’ disease.",
    C: "Fine tremor is also a general feature of thyrotoxicosis and is not specific to Graves’ disease."
  }
},

{
  question: "A 34-year-old woman reports to the emergency unit after waking up with sudden weakness on one side of her face. On examination, she cannot wrinkle her forehead, cannot close the eye on the affected side, and has flattening of the nasolabial fold. Which cranial nerve is most likely affected?",
  options: {
    A: "Trigeminal nerve, CN V",
    B: "Facial nerve, CN VII",
    C: "Glossopharyngeal nerve, CN IX"
  },
  correctAnswer: "B",
  rationaleCorrect: "The facial nerve, cranial nerve VII, controls muscles of facial expression. Sudden unilateral facial weakness involving the forehead, eyelid closure, and mouth suggests a lower motor neuron facial nerve palsy, commonly called Bell’s palsy.",
  rationalesIncorrect: {
    A: "The trigeminal nerve is mainly responsible for facial sensation and muscles of mastication.",
    C: "The glossopharyngeal nerve is involved in swallowing, taste from the posterior tongue, and gag reflex, not facial expression."
  }
},

{
  question: "A 39-year-old woman with severe hypertension and type 2 diabetes is on admission. She is taking a beta-blocker, a thiazide diuretic, and an oral hypoglycaemic agent. Her diabetes is controlled, but urinalysis shows microscopic proteinuria. Which drug should be added to her treatment plan?",
  options: {
    A: "Stop the oral hypoglycaemic drug",
    B: "Start insulin and add an ACE inhibitor",
    C: "Add an ACE inhibitor"
  },
  correctAnswer: "C",
  rationaleCorrect: "An ACE inhibitor is appropriate in a diabetic patient with hypertension and proteinuria because it helps lower blood pressure and offers kidney protection by reducing albuminuria/proteinuria. Evidence-based guidance supports ACE inhibitor or ARB use in diabetic kidney disease with albuminuria.",
  rationalesIncorrect: {
    A: "Her diabetes is controlled, so there is no reason from the scenario to stop the oral medication.",
    B: "An ACE inhibitor is needed, but insulin is not indicated because her diabetes is already controlled."
  }
},

{
  question: "A 39-year-old man reports to the outpatient department with epigastric fullness and discomfort that becomes worse after meals. He smokes but has no previous diagnosis of peptic ulcer disease and has no alarm symptoms. Which diagnostic approach is most appropriate?",
  options: {
    A: "Perform breath testing for H. pylori and treat if positive",
    B: "Start empirical antimicrobial treatment for H. pylori without testing",
    C: "Begin an 8-week proton-pump inhibitor trial before any testing"
  },
  correctAnswer: "A",
  rationaleCorrect: "In a younger patient with dyspepsia and no alarm symptoms, the best approach is non-invasive testing for Helicobacter pylori, such as urea breath test or stool antigen test, followed by eradication treatment if positive.",
  rationalesIncorrect: {
    B: "Antibiotics should not be given blindly because unnecessary antibiotic use can promote resistance and expose the patient to side effects.",
    C: "A PPI trial may be used if H. pylori testing is negative or symptoms persist after eradication, but testing first is preferred in this scenario."
  }
},

{
  question: "A 3-year-old child is admitted with valvular heart disease. During teaching, a student nurse asks which valvular defects can allow blood to flow backward. Which answer is correct? I. Valvular prolapse II. Valvular regurgitation III. Valvular stenosis",
  options: {
    A: "I only",
    B: "I and II",
    C: "II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "Backward flow of blood occurs when the valve does not close properly. This can happen in valvular regurgitation and may also occur in valvular prolapse when the valve leaflets bulge backward and fail to close effectively.",
  rationalesIncorrect: {
    A: "Valvular prolapse can cause backward flow, but regurgitation also directly causes backward flow.",
    C: "Valvular stenosis causes narrowing and obstruction to forward flow, not backward flow."
  }
},

{
  question: "A 40-year-old man with type 2 diabetes and hypertension is admitted with acute myocardial infarction. His LDL cholesterol is 195 mg/dL. He says his cholesterol was “normal” five years ago and has not been checked since. Which statement is correct?",
  options: {
    A: "His LDL target should only be less than 130 mg/dL because he is diabetic",
    B: "He should be treated to achieve only a 30% reduction in LDL cholesterol",
    C: "He should be treated to achieve at least a 50% reduction in LDL cholesterol"
  },
  correctAnswer: "C",
  rationaleCorrect: "A patient with acute myocardial infarction has established cardiovascular disease and requires intensive lipid-lowering therapy. High-intensity statin therapy typically lowers LDL cholesterol by at least 50%.",
  rationalesIncorrect: {
    A: "This is not aggressive enough for someone with myocardial infarction and very high LDL.",
    B: "A 30% reduction is more consistent with moderate-intensity therapy, not the level usually needed after myocardial infarction."
  }
},

{
  question: "A 40-year-old woman reports to the clinic with sudden episodes of severe facial pain. She describes the pain as “electric shock-like,” shooting from the corner of her mouth to the jaw. Each episode lasts a few seconds and is triggered by chewing and drinking hot coffee. Neurological examination is normal. What is the most likely diagnosis?",
  options: {
    A: "Cluster headache",
    B: "Migraine headache",
    C: "Trigeminal neuralgia"
  },
  correctAnswer: "C",
  rationaleCorrect: "Trigeminal neuralgia causes sudden, brief, severe, electric shock-like facial pain along the distribution of the trigeminal nerve. It is commonly triggered by chewing, talking, brushing the teeth, touching the face, or temperature changes.",
  rationalesIncorrect: {
    A: "Cluster headache usually presents with severe pain around one eye, tearing, redness of the eye, nasal congestion, and restlessness.",
    B: "Migraine usually lasts hours, not seconds, and is commonly associated with nausea, photophobia, and throbbing headache."
  }
},

{
  question: "A 40-year-old woman with intermittent asthma is being treated in the emergency unit for an acute exacerbation. She has already received nebulized salbutamol with little improvement. The team considers systemic corticosteroids. Which statement about systemic corticosteroids in asthma exacerbation is true?",
  options: {
    A: "Parenteral corticosteroids are always preferred over oral therapy",
    B: "The maximum adult dose of prednisone is always 40 mg daily",
    C: "They work by suppressing airway inflammation"
  },
  correctAnswer: "C",
  rationaleCorrect: "Systemic corticosteroids are used in asthma exacerbations because they reduce airway inflammation, improve response to bronchodilators, and reduce relapse risk. Evidence also indicates that oral and parenteral routes can be similarly effective in many acute asthma contexts, so injection is not always superior.",
  rationalesIncorrect: {
    A: "Oral therapy is often effective if the patient can swallow and absorb medication.",
    B: "Dosing depends on local protocols and severity; the key concept being tested is the anti-inflammatory action."
  }
},

{
  question: "A 40-year-old man is brought to the emergency unit with sudden onset of a severe headache. He describes it as the worst headache of his life. The pain increases when he moves his head, and he appears distressed. Which diagnosis should the nurse consider first?",
  options: {
    A: "Tension headache",
    B: "Subarachnoid haemorrhage",
    C: "Sinusitis"
  },
  correctAnswer: "B",
  rationaleCorrect: "A sudden, severe “worst headache of life” is a red flag for subarachnoid haemorrhage and should be treated as a medical emergency. Such patients may also have neck stiffness, vomiting, photophobia, reduced consciousness, or seizures.",
  rationalesIncorrect: {
    A: "Tension headache is usually gradual, band-like, and less severe.",
    C: "Sinusitis usually presents with facial pain, nasal discharge, congestion, and tenderness over the sinuses, not sudden thunderclap headache."
  }
},{
  question: "A 40-year-old woman reports to the outpatient clinic with sudden episodes of very severe facial pain. She describes the pain as “electric shock-like,” shooting from the corner of her mouth to the angle of her jaw. Each episode lasts only a few seconds and is triggered when she chews or drinks hot tea. She is currently pain free and has no neurological deficit. What is the most likely diagnosis?",
  options: {
    A: "Trigeminal neuralgia",
    B: "Cluster headache",
    C: "Migraine headache"
  },
  correctAnswer: "A",
  rationaleCorrect: "Trigeminal neuralgia presents with brief, severe, electric shock-like facial pain along the distribution of the trigeminal nerve. It may be triggered by chewing, talking, brushing the teeth, or touching the face.",
  rationalesIncorrect: {
    B: "Cluster headache usually causes severe pain around one eye and may be associated with tearing, red eye, nasal congestion, and restlessness.",
    C: "Migraine usually lasts for hours and is commonly associated with nausea, photophobia, and throbbing headache, not brief electric shock-like pain lasting seconds."
  }
},

{
  question: "A 42-year-old woman receiving intravenous fluids suddenly complains of difficulty breathing. The nurse suspects pulmonary oedema. Which nursing assessments will best help confirm this suspicion? I. Auscultating the lungs for crackles II. Placing the patient in a sitting-up position III. Checking the fluid balance chart",
  options: {
    A: "I, II and III",
    B: "I and II",
    C: "I and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "Pulmonary oedema is suggested by respiratory distress and crackles on auscultation due to fluid accumulation in the lungs. Checking the fluid balance chart helps identify possible fluid overload, especially in a patient receiving intravenous fluids.",
  rationalesIncorrect: {
    A: "Placing the patient in a sitting-up position is an appropriate intervention, but it does not confirm pulmonary oedema.",
    B: "Auscultation is useful, but sitting the patient upright is treatment, not confirmation. The fluid balance chart gives important supporting evidence."
  }
},

{
  question: "A 42-year-old man is brought to the emergency unit by his mother. While the nurse is taking the history, he develops a generalized tonic-clonic seizure. The seizure continues and intravenous access is available. Which medication is first-line?",
  options: {
    A: "Lorazepam 0.1 mg/kg IV",
    B: "Phenytoin 20 mg/kg IV",
    C: "Phenobarbital 20 mg/kg IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "For an ongoing convulsive seizure where IV access and resuscitation facilities are available, IV lorazepam is a first-line benzodiazepine option. NICE guidance also recommends IV lorazepam in convulsive status epilepticus when IV access is immediately available.",
  rationalesIncorrect: {
    B: "Phenytoin is commonly used after benzodiazepines if seizures continue. It is not the first immediate drug in this scenario.",
    C: "Phenobarbital may be used in refractory cases or where other agents are unsuitable, but it is not the first-line immediate treatment here."
  }
},

{
  question: "A 43-year-old banker reports to the emergency unit after vomiting bright red blood four times. He feels weak and light-headed but denies abdominal pain. The nurse suspects an upper gastrointestinal bleed. Which investigation is most appropriate to confirm the diagnosis?",
  options: {
    A: "Computed tomography scan",
    B: "Magnetic resonance imaging",
    C: "Endoscopy of the digestive system"
  },
  correctAnswer: "C",
  rationaleCorrect: "Bright red vomiting of blood suggests haematemesis from an upper gastrointestinal source. Upper gastrointestinal endoscopy is the best diagnostic procedure because it allows direct visualization of the bleeding site and may also allow treatment.",
  rationalesIncorrect: {
    A: "CT may be useful in selected abdominal conditions, but it is not the best first investigation for confirming upper gastrointestinal bleeding.",
    B: "MRI is not used as the initial diagnostic test for haematemesis."
  }
},

{
  question: "A 43-year-old woman with a history of diabetes and hypertension comes to the clinic with progressive shortness of breath on exertion. She has also started waking at night gasping for air. On examination, a murmur is heard over the aortic area, and echocardiography confirms aortic stenosis. Which previous condition most likely contributed to the valvular disease in this patient?",
  options: {
    A: "Hypertension",
    B: "Diabetes mellitus",
    C: "Rheumatic fever"
  },
  correctAnswer: "C",
  rationaleCorrect: "Rheumatic fever can damage heart valves and later lead to valvular stenosis or regurgitation. In a relatively young adult with valvular disease, previous rheumatic fever is an important cause to consider.",
  rationalesIncorrect: {
    A: "Hypertension increases cardiac workload but is not the most likely direct cause of aortic valve stenosis in this scenario.",
    B: "Diabetes increases cardiovascular risk but does not typically cause rheumatic-type valvular stenosis."
  }
},

{
  question: "A 48-year-old woman has been taking ciprofloxacin for a urinary tract infection. After three days, she reports watery diarrhoea, abdominal cramps, and bloating. Stool test is positive for Clostridioides difficile toxin. Which antibiotic is the best option among the following?",
  options: {
    A: "Levofloxacin 750 mg",
    B: "Metronidazole 500 mg",
    C: "Vancomycin 125 mg"
  },
  correctAnswer: "C",
  rationaleCorrect: "Antibiotic-associated diarrhoea with positive C. difficile toxin suggests Clostridioides difficile infection. Among the options provided, oral vancomycin is the best answer. Current IDSA/SHEA guidance prefers fidaxomicin for an initial episode when available, but vancomycin remains an acceptable alternative.",
  rationalesIncorrect: {
    A: "Levofloxacin is a fluoroquinolone and may worsen the problem because fluoroquinolones are associated with increased risk of C. difficile infection.",
    B: "Metronidazole was used commonly in the past, but it is no longer the best first-line option for many adult patients when vancomycin or fidaxomicin is available."
  }
},

{
  question: "A 48-year-old man reports to the clinic with drooping of the right side of his face and difficulty speaking for two days. On examination, he cannot wrinkle the right side of his forehead, cannot close the right eye tightly, and the right nasolabial fold is flattened. What is the most likely explanation?",
  options: {
    A: "Upper motor neuron lesion",
    B: "Cerebrovascular accident",
    C: "Facial nerve paralysis"
  },
  correctAnswer: "C",
  rationaleCorrect: "Paralysis of both the upper and lower parts of one side of the face suggests a lower motor neuron facial nerve palsy. Facial nerve palsy affects facial expression, including forehead wrinkling and eye closure. The MSD Manual notes that facial nerve palsy can limit or prevent forehead wrinkling, blinking, and grimacing on the affected side.",
  rationalesIncorrect: {
    A: "Upper motor neuron lesions usually spare the forehead because the upper face receives bilateral cortical innervation.",
    B: "A stroke can cause facial weakness, but forehead sparing is more typical. In this scenario, the whole side of the face is affected, pointing more toward facial nerve paralysis."
  }
},

{
  question: "A 50-year-old woman with constipation, hypertension, diabetes, and a family history of colon cancer had her first screening colonoscopy one week ago. The report states that the colonoscope reached the caecum, but bowel preparation was poor, with semisolid stool in the ascending colon. Two tiny rectal hyperplastic polyps were removed. When should the colonoscopy be repeated?",
  options: {
    A: "3 years",
    B: "1 year",
    C: "5 years"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key issue is not the small hyperplastic polyps; it is the poor bowel preparation. Poor preparation can cause lesions to be missed, especially in the proximal colon. Guidance commonly recommends repeating colonoscopy within one year when bowel preparation is inadequate or poor.",
  rationalesIncorrect: {
    A: "Three years may be used for some higher-risk polyp findings, but the poor preparation makes an earlier repeat necessary.",
    C: "Five years is too long when the bowel was poorly prepared and some areas may not have been adequately visualized."
  }
},

{
  question: "A 50-year-old man with a history of seizures and alcohol abuse is admitted with productive cough, fever, chills, and difficulty breathing. His temperature is 39.2°C and pulse is 110 beats per minute. Chest X-ray shows an air-fluid level in the right upper lobe, and lung abscess is suspected. He is receiving antibiotics. What is the most appropriate nursing care?",
  options: {
    A: "Assist the patient into a comfortable position, record and report any changes",
    B: "Perform chest tube drainage, record and report any changes",
    C: "Monitor vital signs and respiratory status, record and report any changes"
  },
  correctAnswer: "C",
  rationaleCorrect: "A lung abscess is a serious infection that may cause fever, tachycardia, productive cough, dyspnoea, and sepsis. The nurse should closely monitor vital signs, respiratory status, oxygenation, sputum, response to antibiotics, and report deterioration promptly.",
  rationalesIncorrect: {
    A: "Positioning is helpful, but it is not as comprehensive as monitoring vital signs and respiratory status.",
    B: "Chest tube insertion or drainage is not a routine independent nursing action for lung abscess and is not the first nursing care here."
  }
},

{
  question: "A 52-year-old woman is referred after an abdominal scan shows a 3 cm right adrenal mass. She reports occasional headaches, sweating episodes, and recent low mood. She has diet-controlled diabetes. On assessment, her blood pressure is elevated. Which diagnosis should the nurse suspect?",
  options: {
    A: "Pheochromocytoma",
    B: "Addison’s disease",
    C: "Simple renal cyst"
  },
  correctAnswer: "A",
  rationaleCorrect: "An adrenal mass associated with episodic headache, sweating, and hypertension should raise suspicion of pheochromocytoma. Pheochromocytoma is a catecholamine-secreting tumour that may cause paroxysmal hypertension, headaches, sweating, and palpitations.",
  rationalesIncorrect: {
    B: "Addison’s disease usually presents with adrenal insufficiency, weight loss, hypotension, hyperpigmentation, weakness, and electrolyte imbalance.",
    C: "A simple renal cyst would not typically explain episodic sweating, headaches, and hypertension."
  }
},{
  question: "A 52-year-old woman is referred to the medical clinic after an abdominal scan shows a 3 cm right adrenal mass. She has no hirsutism, acne, proximal muscle weakness, easy bruising, abdominal striae, or supraclavicular fat pad. She has occasional headaches, sweating, mild depression, and diet-controlled diabetes. Her BP is 135/85 mmHg. Which initial investigation is most appropriate?",
  options: {
    A: "Determine aldosterone-to-renin ratio",
    B: "Overnight dexamethasone suppression test",
    C: "Serum androstenedione level"
  },
  correctAnswer: "B",
  rationaleCorrect: "An adrenal mass found incidentally should be assessed for hormone secretion. The overnight dexamethasone suppression test is used to screen for autonomous cortisol secretion, even when obvious Cushingoid features are absent. Current endocrine guidance recommends this test in patients with adrenal incidentalomas unless they are frail with limited life expectancy.",
  rationalesIncorrect: {
    A: "This is more appropriate when primary aldosteronism is suspected, especially with hypertension and hypokalaemia.",
    C: "This would be more useful if there were features of androgen excess such as hirsutism, acne, or virilisation."
  }
},

{
  question: "A 53-year-old man with chronic pancreatitis due to long-term alcohol use complains of worsening epigastric pain and dizziness. On assessment, he is afebrile but orthostatic, and he passes melaena stool. Which nursing care is most appropriate?",
  options: {
    A: "Monitor for changes in condition, record and report",
    B: "Check vital signs four-hourly, record and report",
    C: "Observe vital signs, stool, and vomitus, then report changes"
  },
  correctAnswer: "C",
  rationaleCorrect: "Melaena, dizziness, and postural hypotension suggest gastrointestinal bleeding. The nurse should closely monitor vital signs, stool colour, amount of bleeding, vomitus, level of consciousness, and report deterioration promptly.",
  rationalesIncorrect: {
    A: "This is too general and does not focus on the suspected bleeding.",
    B: "Vital signs are important, but in suspected bleeding, stool and vomitus must also be observed closely."
  }
},

{
  question: "A 54-year-old woman admitted with heart failure suddenly complains of difficulty breathing. She is restless and prefers to sit upright. Which nursing interventions should be performed to improve breathing? I. Auscultate the lungs II. Place her in high Fowler’s position III. Administer oxygen as prescribed or per protocol IV. Administer diuretics independently",
  options: {
    A: "II and III",
    B: "I and II",
    C: "I, II and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "For a heart failure patient with dyspnoea, the immediate nursing interventions that directly aid breathing are to place the patient in high Fowler’s position and administer oxygen as prescribed or per protocol.",
  rationalesIncorrect: {
    B: "Auscultating the lungs is important for assessment, but it does not directly relieve dyspnoea.",
    C: "Although auscultation is useful, the question asks for interventions to aid breathing. The most direct interventions are positioning and oxygen administration."
  }
},

{
  question: "A 55-year-old man becomes confused and febrile after treatment for myocardial infarction. He develops a short tonic-clonic seizure. Laboratory results show anaemia, severe thrombocytopenia, raised creatinine, raised LDH, normal PT/PTT, and negative direct Coombs’ test. Brain CT is normal. What is the next step in making the diagnosis?",
  options: {
    A: "Intravenous fluid resuscitation",
    B: "Peripheral blood smear review",
    C: "Pulmonary artery catheterization"
  },
  correctAnswer: "B",
  rationaleCorrect: "The combination of neurological symptoms, thrombocytopenia, anaemia, renal impairment, raised LDH, and normal coagulation studies suggests thrombotic thrombocytopenic purpura. Peripheral blood smear is needed to look for schistocytes, which support microangiopathic haemolytic anaemia.",
  rationalesIncorrect: {
    A: "Fluids may support circulation, but they do not confirm the diagnosis.",
    C: "This is not the appropriate diagnostic step for this blood and neurological picture."
  }
},

{
  question: "A 55-year-old patient with chronic renal failure is being reviewed on the ward. The nurse explains that reduced kidney function has led to inadequate erythropoietin production. Which complication is the patient most likely to develop?",
  options: {
    A: "Hypercalcaemia",
    B: "Anaemia",
    C: "Respiratory acidosis"
  },
  correctAnswer: "B",
  rationaleCorrect: "The kidneys produce erythropoietin, which stimulates red blood cell production. In chronic renal failure, reduced erythropoietin production leads to anaemia.",
  rationalesIncorrect: {
    A: "Chronic renal failure is more commonly associated with calcium-phosphate imbalance, but erythropoietin deficiency specifically causes anaemia.",
    C: "This is mainly related to inadequate ventilation, not reduced erythropoietin production."
  }
},

{
  question: "A 55-year-old woman with stage II hypertension is reviewed in the clinic. She has mild bilateral pedal oedema, clear lungs, and an ECG showing second-degree heart block. Which antihypertensive drug class should be avoided?",
  options: {
    A: "Diuretics",
    B: "Angiotensin receptor blockers",
    C: "Calcium channel blockers"
  },
  correctAnswer: "C",
  rationaleCorrect: "Some calcium channel blockers, especially non-dihydropyridines such as verapamil and diltiazem, can slow AV nodal conduction and worsen heart block. Therefore, they should be avoided in a patient with second-degree heart block unless specifically ordered under specialist care.",
  rationalesIncorrect: {
    A: "Diuretics can be used in hypertension and oedema when clinically appropriate.",
    B: "ARBs do not usually worsen AV block and are commonly used in hypertension."
  }
},

{
  question: "A 55-year-old man is admitted with acute cardiac tamponade. He is hypotensive, anxious, and has distended neck veins. Pericardiocentesis is being arranged. Which intervention is most important while awaiting definitive treatment?",
  options: {
    A: "Heart massage",
    B: "Epinephrine administration",
    C: "Fluid resuscitation"
  },
  correctAnswer: "C",
  rationaleCorrect: "In acute cardiac tamponade, fluid accumulates around the heart and prevents proper ventricular filling. While awaiting definitive treatment such as pericardiocentesis, cautious fluid resuscitation may help maintain preload and cardiac output.",
  rationalesIncorrect: {
    A: "Cardiac massage is not the appropriate intervention for tamponade unless the patient is in cardiac arrest and resuscitation is required.",
    B: "Epinephrine is not the key initial supportive intervention in a conscious hypotensive patient with tamponade."
  }
},

{
  question: "A 56-year-old woman is admitted with excessive thirst, frequent urination, Kussmaul respiration, fruity breath odour, confusion, and disorientation. What is the most likely diagnosis?",
  options: {
    A: "Diabetic ketoacidosis",
    B: "Diabetes insipidus",
    C: "Gestational diabetes"
  },
  correctAnswer: "A",
  rationaleCorrect: "Diabetic ketoacidosis commonly presents with polyuria, polydipsia, dehydration, fruity-smelling breath, deep rapid breathing, weakness, nausea, vomiting, and altered mental status.",
  rationalesIncorrect: {
    B: "Diabetes insipidus causes excessive urination and thirst but does not cause fruity breath or Kussmaul respiration.",
    C: "This occurs during pregnancy and does not typically present with this acute acidotic picture."
  }
},

{
  question: "A 56-year-old man diagnosed with gout asks the nurse to explain the cause of his condition. The nurse should explain that gout occurs due to accumulation of which substance in the blood?",
  options: {
    A: "Creatinine",
    B: "Uric acid",
    C: "Purine"
  },
  correctAnswer: "B",
  rationaleCorrect: "Gout occurs when uric acid accumulates in the blood and forms urate crystals in joints, causing inflammation and severe joint pain.",
  rationalesIncorrect: {
    A: "Creatinine is a marker of kidney function, not the direct cause of gout.",
    C: "Purines are broken down into uric acid, but the accumulated substance in gout is uric acid."
  }
},

{
  question: "A 56-year-old man reports to the emergency unit with squeezing chest pain that started three hours ago. The nurse suspects myocardial infarction. Which associated finding would increase the likelihood of myocardial infarction?",
  options: {
    A: "Hypotension",
    B: "Shortness of breath",
    C: "Reproducible chest pain"
  },
  correctAnswer: "B",
  rationaleCorrect: "Chest pain due to myocardial infarction may be associated with shortness of breath, sweating, nausea, weakness, or radiation of pain to the arm, jaw, neck, or back. Shortness of breath therefore increases suspicion.",
  rationalesIncorrect: {
    A: "Hypotension may occur in severe myocardial infarction or shock, but it is not the best typical associated symptom among the options.",
    C: "Chest pain that is reproducible by palpation is more suggestive of musculoskeletal pain and lowers the likelihood of myocardial infarction."
  }
},

{
  question: "A 6-year-old girl from a rural community is brought to the clinic because she cannot play for long with her peers and squats after a short period of activity. On assessment, the nurse notices clubbing of the fingers. Clubbing is commonly associated with which condition?",
  options: {
    A: "Anaemia",
    B: "Congenital heart disease",
    C: "Bronchitis"
  },
  correctAnswer: "B",
  rationaleCorrect: "Clubbing may occur in chronic hypoxaemic conditions, including cyanotic congenital heart disease. Squatting after exertion is also a classic compensatory behaviour seen in some cyanotic heart defects.",
  rationalesIncorrect: {
    A: "Anaemia may cause fatigue and pallor but does not typically cause finger clubbing.",
    C: "Acute bronchitis does not usually cause clubbing. Clubbing is more associated with chronic suppurative lung disease or chronic hypoxia."
  }
},

{
  question: "A 64-year-old man presents with severe headache that began as a dull unilateral ache over the left eye and temporal region. He has nausea, photophobia, red left eye, and a fixed mid-dilated pupil. CT scan of the head is normal. What is the most likely diagnosis?",
  options: {
    A: "Acute angle-closure glaucoma",
    B: "Age-related macular degeneration",
    C: "Diabetic retinopathy"
  },
  correctAnswer: "A",
  rationaleCorrect: "Acute angle-closure glaucoma can present with severe eye pain or headache, red eye, nausea, vomiting, blurred vision, and a fixed mid-dilated pupil. It is an ophthalmic emergency.",
  rationalesIncorrect: {
    B: "This causes gradual central vision loss, not sudden painful red eye with a fixed mid-dilated pupil.",
    C: "Diabetic retinopathy usually causes visual changes due to retinal vascular damage and is not typically associated with acute painful red eye."
  }
},

{
  question: "A 66-year-old woman with a history of tobacco use and obesity has a haematocrit of 51% on routine testing. She has occasional headaches but no previous thrombosis or bleeding. Which is the next step in workup?",
  options: {
    A: "Continued observation",
    B: "Serum erythropoietin screening",
    C: "Immediate phlebotomy and aspirin"
  },
  correctAnswer: "B",
  rationaleCorrect: "An elevated haematocrit requires evaluation to distinguish primary polycythaemia from secondary causes. Serum erythropoietin level helps guide the workup. A low EPO suggests polycythaemia vera, while a high EPO suggests secondary erythrocytosis.",
  rationalesIncorrect: {
    A: "Observation alone is not appropriate because the raised haematocrit needs evaluation.",
    C: "Phlebotomy and aspirin may be used in confirmed polycythaemia vera, but diagnosis should be clarified first."
  }
},

{
  question: "A 67-year-old patient with insomnia asks the nurse how normal sleep is organized. The nurse explains that sleep alternates between rapid eye movement and non-rapid eye movement sleep in cycles of approximately:",
  options: {
    A: "30–50 minutes",
    B: "60–80 minutes",
    C: "90–110 minutes"
  },
  correctAnswer: "C",
  rationaleCorrect: "Normal adult sleep occurs in cycles of non-rapid eye movement and rapid eye movement sleep, with each cycle lasting about 90 to 110 minutes.",
  rationalesIncorrect: {
    A: "This is too short for a full normal sleep cycle.",
    B: "This is still shorter than the usual adult sleep cycle."
  }
},

{
  question: "A 67-year-old patient is diagnosed with infective endocarditis. The nurse is preparing the nursing care plan. Which nursing diagnosis is most appropriate?",
  options: {
    A: "Decrease in cardiac output related to decreased pumping action of the heart",
    B: "Decreased cardiac output related to reduced mechanical function of the heart muscle",
    C: "Decreased function of the activity of the heart related to infective endocarditis"
  },
  correctAnswer: "B",
  rationaleCorrect: "Infective endocarditis can damage heart valves and interfere with effective cardiac function, leading to reduced cardiac output. Option B is the most properly worded nursing diagnosis among the choices.",
  rationalesIncorrect: {
    A: "The idea is close, but the wording is less standard.",
    C: "This is poorly worded and not an appropriate nursing diagnosis."
  }
},

{
  question: "A 69-year-old man with gout, hypertension, and diabetes reports for routine review. He recently had a gout attack. Which antihypertensive medication could worsen his gout?",
  options: {
    A: "Hydrochlorothiazide",
    B: "Amlodipine",
    C: "Lisinopril"
  },
  correctAnswer: "A",
  rationaleCorrect: "Thiazide diuretics such as hydrochlorothiazide can increase serum uric acid levels and may precipitate or worsen gout attacks.",
  rationalesIncorrect: {
    B: "Amlodipine is not commonly associated with worsening gout.",
    C: "Lisinopril is not a common cause of gout exacerbation."
  }
},

{
  question: "A 70-year-old woman is admitted with urinary tract infection. The nurse reviews possible factors that may have contributed to the infection. Which factors are relevant? I. Frequent use of antimicrobial agents II. Incomplete emptying of the bladder III. Presence of an infected wound on the leg IV. Prolonged confinement to bed",
  options: {
    A: "I, III and IV",
    B: "I, II and IV",
    C: "I, II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "Older adults are at increased risk of urinary tract infection due to factors such as incomplete bladder emptying, immobility or prolonged bed rest, poor hydration, catheter use, and repeated antimicrobial exposure that may alter normal flora and encourage resistant organisms.",
  rationalesIncorrect: {
    A: "An infected wound on the leg is not a direct risk factor for urinary tract infection.",
    C: "This includes the infected leg wound but excludes prolonged confinement to bed, which is more relevant."
  }
},{
  question: "A 70-year-old man with coronary artery disease and hypertension reports to the clinic with acute low back pain. The nurse reviews the prescribed analgesics and identifies one that should be avoided because of cardiovascular concerns. Which drug should raise concern?",
  options: {
    A: "Hydrocodone",
    B: "Naproxen",
    C: "Acetaminophen"
  },
  correctAnswer: "B",
  rationaleCorrect: "Naproxen is a non-steroidal anti-inflammatory drug. NSAIDs may worsen blood pressure control, cause fluid retention, and increase cardiovascular risk, especially in patients with coronary artery disease and hypertension.",
  rationalesIncorrect: {
    A: "Hydrocodone has other risks such as sedation, dependence, and respiratory depression, but it is not the main cardiovascular concern here.",
    C: "Acetaminophen is generally preferred for pain relief in patients where NSAIDs are risky, although dose limits must still be observed."
  }
},

{
  question: "A 72-year-old man is admitted with severe diarrhoea after recent hospitalisation and antibiotic treatment. Stool studies confirm Clostridioides difficile infection. Which statement about this organism is true?",
  options: {
    A: "It is most commonly transmitted by airborne spread",
    B: "It is a gram-positive, spore-forming, toxin-producing anaerobic bacillus",
    C: "Recent antibiotic exposure is a common predisposing risk"
  },
  correctAnswer: "C",
  rationaleCorrect: "C. difficile infection commonly occurs after antibiotic use because antibiotics disturb normal intestinal flora. This allows C. difficile to multiply and produce toxins that cause diarrhoea and colitis.",
  rationalesIncorrect: {
    A: "C. difficile is mainly transmitted by the faecal-oral route, especially through spores on contaminated hands, surfaces, and equipment.",
    B: "This option is also factually correct if written as gram-positive. To make C the only correct answer, change this option to gram-negative in your final question bank."
  }
},

{
  question: "A 72-year-old man with liver cirrhosis has ascites and severe hepatic dysfunction. The nurse is planning dietary education. Which diet is most appropriate?",
  options: {
    A: "High sodium and low protein",
    B: "High protein and low carbohydrate",
    C: "High carbohydrate and low sodium"
  },
  correctAnswer: "C",
  rationaleCorrect: "In cirrhosis with ascites, sodium restriction helps reduce fluid retention. Carbohydrates are encouraged to provide energy and prevent protein breakdown. Protein may need careful adjustment depending on hepatic encephalopathy risk, but high sodium should be avoided.",
  rationalesIncorrect: {
    A: "High sodium worsens ascites and oedema.",
    B: "This is not the best option in severe hepatic dysfunction with ascites. Carbohydrate intake is important for energy, and protein must be individualized."
  }
},

{
  question: "A 72-year-old woman with type 2 diabetes is scheduled for a CT scan with contrast. Which medication should the nurse expect to be withheld before or around the procedure?",
  options: {
    A: "Metformin",
    B: "Lantus",
    C: "Glipizide"
  },
  correctAnswer: "A",
  rationaleCorrect: "Metformin may be withheld around iodinated contrast procedures, especially when there is concern about renal impairment, because contrast can affect renal function and increase the risk of metformin-associated lactic acidosis.",
  rationalesIncorrect: {
    B: "Lantus is insulin glargine. It is not the classic medication withheld because of contrast exposure.",
    C: "Glipizide can cause hypoglycaemia, but it is not the main drug associated with contrast-related lactic acidosis risk."
  }
},

{
  question: "A 72-year-old woman with hypertension and type 2 diabetes reports to the emergency department with epigastric pain. She is sweating, nauseated, and the pain is not relieved by antacids. Which test should be ordered first?",
  options: {
    A: "ECG",
    B: "Amylase",
    C: "Lipase"
  },
  correctAnswer: "A",
  rationaleCorrect: "In an older diabetic patient, myocardial infarction may present atypically as epigastric pain, nausea, and sweating. An ECG should be done immediately to assess for acute coronary syndrome.",
  rationalesIncorrect: {
    B: "Amylase may help assess pancreatitis, but cardiac causes must be ruled out first.",
    C: "Lipase is useful for pancreatitis, but the patient’s age, diabetes, diaphoresis, and unrelieved epigastric pain make ECG the priority."
  }
},

{
  question: "A 72-year-old man with alcoholic cirrhosis and recurrent ascites is admitted with haematemesis and dark urine. He has bilateral lower limb oedema and worsening renal function without another obvious renal cause. What is the most likely explanation?",
  options: {
    A: "Acute tubular necrosis",
    B: "Contrast nephropathy",
    C: "Hepatorenal syndrome"
  },
  correctAnswer: "C",
  rationaleCorrect: "Hepatorenal syndrome is renal failure that occurs in advanced liver disease, especially cirrhosis with ascites. It results from severe circulatory changes and poor renal perfusion rather than primary kidney disease.",
  rationalesIncorrect: {
    A: "This usually follows renal ischaemia or nephrotoxic injury and is not the best answer from the cirrhosis-ascites picture.",
    B: "There is no clear history of recent contrast exposure in the scenario."
  }
},

{
  question: "A 74-year-old woman presents with three days of abdominal pain. She has left lower quadrant tenderness, normal laboratory results, no rebound tenderness, and no guarding. Diverticulitis is suspected. What is the best next step?",
  options: {
    A: "Abdominal X-rays",
    B: "Trial of liquid diet only",
    C: "CT scan of the abdomen"
  },
  correctAnswer: "C",
  rationaleCorrect: "Left lower quadrant pain in an older adult suggests diverticulitis. CT scan of the abdomen is useful to confirm the diagnosis and assess complications such as abscess or perforation.",
  rationalesIncorrect: {
    A: "Plain X-rays are less useful for diagnosing uncomplicated diverticulitis.",
    B: "Diet modification may be part of management, but diagnosis should first be confirmed."
  }
},

{
  question: "A 75-year-old woman is brought to the eye clinic with reduced vision, photophobia, and redness of the eye. Slit-lamp examination shows cells in the aqueous humour and keratic precipitates. Which diagnosis is most likely?",
  options: {
    A: "Posterior uveitis",
    B: "Anterior uveitis",
    C: "Diffuse uveitis"
  },
  correctAnswer: "B",
  rationaleCorrect: "Anterior uveitis involves inflammation of the anterior chamber. Features include eye pain, photophobia, conjunctival injection, decreased vision, cells in the aqueous humour, and keratic precipitates.",
  rationalesIncorrect: {
    A: "Posterior uveitis affects the back of the eye and is more associated with floaters and posterior segment findings.",
    C: "Diffuse uveitis involves both anterior and posterior structures, but the findings here point mainly to anterior chamber inflammation."
  }
},

{
  question: "A 78-year-old woman is prescribed oral diuretics for hypertension and mild heart failure. The nurse gives the medication in the morning mainly to prevent:",
  options: {
    A: "Night sleep interference",
    B: "Drug interaction",
    C: "Adverse reactions"
  },
  correctAnswer: "A",
  rationaleCorrect: "Diuretics increase urine production. Giving them in the morning reduces nocturia and prevents interruption of sleep at night.",
  rationalesIncorrect: {
    B: "Morning administration is not primarily to prevent drug interactions.",
    C: "Timing may improve comfort, but it does not prevent all adverse effects such as electrolyte imbalance."
  }
},

{
  question: "A 78-year-old patient has left lower quadrant abdominal pain for five days. The nurse practitioner suspects diverticulitis. Which imaging study should be ordered to confirm the diagnosis?",
  options: {
    A: "Colonoscopy",
    B: "Barium enema",
    C: "CT abdomen"
  },
  correctAnswer: "C",
  rationaleCorrect: "CT abdomen is the preferred imaging test to confirm suspected diverticulitis and identify complications.",
  rationalesIncorrect: {
    A: "Colonoscopy is usually avoided during acute diverticulitis because of perforation risk.",
    B: "Barium enema is not the preferred initial investigation in acute suspected diverticulitis."
  }
},

{
  question: "A 78-year-old man with hypertension was prescribed hydrochlorothiazide 25 mg daily. At follow-up, he tells the nurse that he stopped taking the medication because his morning headaches have resolved. What is the best nursing action?",
  options: {
    A: "Educate him on the importance of taking his medication daily",
    B: "Advise him to continue stopping hydrochlorothiazide",
    C: "Reduce the dose to 12.5 mg daily without prescriber review"
  },
  correctAnswer: "A",
  rationaleCorrect: "Hypertension is often asymptomatic. The absence of headache does not mean the blood pressure is controlled. The nurse should educate the patient on adherence and the risks of uncontrolled hypertension, such as stroke, heart failure, and kidney disease.",
  rationalesIncorrect: {
    B: "This exposes him to complications of uncontrolled hypertension.",
    C: "The nurse should not independently alter the prescribed dose."
  }
},

{
  question: "A 7-year-old boy with valvular heart disease has dyspnoea on exertion, haemoptysis, and fatigue. These findings most strongly suggest disease of which mitral valve lesion?",
  options: {
    A: "Mitral stenosis",
    B: "Mitral prolapse",
    C: "Mitral regurgitation"
  },
  correctAnswer: "A",
  rationaleCorrect: "Mitral stenosis causes obstruction to blood flow from the left atrium to the left ventricle. This can increase pulmonary pressure, leading to dyspnoea, fatigue, and haemoptysis.",
  rationalesIncorrect: {
    B: "Mitral valve prolapse may cause palpitations, atypical chest pain, or a click-murmur, but not classically haemoptysis and exertional dyspnoea.",
    C: "Mitral regurgitation can cause dyspnoea and fatigue, but haemoptysis is more classically associated with mitral stenosis."
  }
},

{
  question: "A client arrives at the emergency room with impacted cerumen in the left ear. Which intervention would the nurse anticipate initially?",
  options: {
    A: "Irrigation of the ear",
    B: "Instillation of antibiotic ear drops",
    C: "Instillation of olive oil"
  },
  correctAnswer: "C",
  rationaleCorrect: "Olive oil or another cerumen-softening agent may be used initially to soften impacted wax before removal or irrigation.",
  rationalesIncorrect: {
    A: "Irrigation may be done after softening the wax and only if there is no contraindication such as perforated tympanic membrane.",
    B: "Antibiotics are not indicated for simple impacted cerumen unless infection is present."
  }
},

{
  question: "A client is admitted with gastroenteritis. The nurse reviews the possible diagnostic investigations. Which of the following is not a typical diagnostic finding or routine investigation for gastroenteritis?",
  options: {
    A: "Endoscopy",
    B: "Full blood count",
    C: "Abdominal X-ray"
  },
  correctAnswer: "A",
  rationaleCorrect: "Gastroenteritis is usually diagnosed clinically and may be supported by stool studies, hydration assessment, electrolytes, and full blood count when needed. Endoscopy is not a routine diagnostic test for simple gastroenteritis.",
  rationalesIncorrect: {
    B: "A full blood count may help assess infection or dehydration-related changes.",
    C: "Although not always required, abdominal X-ray may be considered if complications or alternative diagnoses are suspected."
  }
},

{
  question: "A student nurse asks about the term used for a substance in solution that dissociates into charged particles. What is the correct term?",
  options: {
    A: "Anions",
    B: "Cations",
    C: "Electrolyte"
  },
  correctAnswer: "C",
  rationaleCorrect: "An electrolyte is a substance that dissociates in solution into charged particles called ions. These ions help regulate fluid balance, nerve conduction, and muscle function.",
  rationalesIncorrect: {
    A: "Anions are negatively charged ions, not the general term for the compound.",
    B: "Cations are positively charged ions, not the general term for the compound."
  }
},

{
  question: "A CT scan report describes a progressive disease of large and medium-sized arteries characterized by fatty deposits affecting the intimal and medial layers. What is the most likely diagnosis?",
  options: {
    A: "Arteriosclerosis",
    B: "Atherosclerosis",
    C: "Arteriogenic disease"
  },
  correctAnswer: "B",
  rationaleCorrect: "Atherosclerosis is characterized by fatty plaque deposition within the arterial wall, especially in large and medium-sized arteries. It can lead to narrowing, thrombosis, myocardial infarction, and stroke.",
  rationalesIncorrect: {
    A: "Arteriosclerosis is a broader term meaning hardening of the arteries.",
    C: "This is not the correct diagnostic term for fatty plaque deposition in arteries."
  }
},

{
  question: "A child is being investigated for suspected sickle cell disease. Which diagnostic test provides a definitive diagnosis?",
  options: {
    A: "Bone marrow aspiration",
    B: "Full blood count",
    C: "Haemoglobin electrophoresis"
  },
  correctAnswer: "C",
  rationaleCorrect: "Haemoglobin electrophoresis identifies abnormal haemoglobin types such as HbS and is used to confirm sickle cell disease.",
  rationalesIncorrect: {
    A: "This is not used to diagnose sickle cell disease.",
    B: "A full blood count may show anaemia but cannot definitively diagnose sickle cell disease."
  }
},

{
  question: "A patient is diagnosed with a disease whose cause cannot be identified. What term describes this type of disease?",
  options: {
    A: "Idiopathic",
    B: "Iatrogenic",
    C: "Communicable"
  },
  correctAnswer: "A",
  rationaleCorrect: "Idiopathic means a disease or condition has no known cause.",
  rationalesIncorrect: {
    B: "Iatrogenic means caused by medical treatment or intervention.",
    C: "Communicable means infectious and transmissible from one person to another."
  }
},

{
  question: "A patient complains of repeated attacks of severe vertigo, nausea, vomiting, tinnitus, and progressive hearing loss. Which condition is most likely?",
  options: {
    A: "Acute otitis media",
    B: "Meniere’s syndrome",
    C: "Mastoiditis"
  },
  correctAnswer: "B",
  rationaleCorrect: "Meniere’s syndrome is an inner ear disorder characterized by recurrent vertigo, tinnitus, nausea, vomiting, a feeling of ear fullness, and progressive hearing loss.",
  rationalesIncorrect: {
    A: "This is a middle ear infection, usually causing ear pain, fever, and hearing reduction, not recurrent severe vertigo with tinnitus.",
    C: "Mastoiditis is infection of the mastoid bone, usually following otitis media, with pain and swelling behind the ear."
  }
},

{
  question: "A farmer who self-medicates with herbal and orthodox medicines is admitted with acute renal failure. He complains of tingling of the fingers and toes and muscle twitching. Which electrolyte problem is most likely responsible?",
  options: {
    A: "Acidosis",
    B: "Calcium depletion",
    C: "Potassium retention"
  },
  correctAnswer: "B",
  rationaleCorrect: "Tingling around the mouth or extremities and muscle twitching suggest hypocalcaemia. Low calcium increases neuromuscular excitability and may cause tetany.",
  rationalesIncorrect: {
    A: "Acidosis may occur in renal failure, but tingling and muscle twitching point more directly to hypocalcaemia.",
    C: "Hyperkalaemia can cause muscle weakness and dangerous cardiac arrhythmias, but it is less associated with tingling and twitching."
  }
},

{
  question: "A 31-year-old woman with ulcerative colitis is being reviewed after endoscopy. A student asks which enzyme is not present in the small intestine. What is the correct answer?",
  options: {
    A: "Chymotrypsinogen",
    B: "Enterokinase",
    C: "Erepsin"
  },
  correctAnswer: "A",
  rationaleCorrect: "Chymotrypsinogen is produced by the pancreas and released into the small intestine, where it is activated. Enterokinase and erepsin are enzymes associated with the intestinal mucosa.",
  rationalesIncorrect: {
    B: "Enterokinase is present in the small intestinal mucosa and activates trypsinogen to trypsin.",
    C: "Erepsin refers to intestinal peptidases involved in protein digestion."
  }
},

{
  question: "A female patient develops swollen lips and difficulty breathing shortly after receiving a medication. What is this severe drug reaction called?",
  options: {
    A: "Drug intolerance",
    B: "Medication reaction",
    C: "Anaphylactic reaction"
  },
  correctAnswer: "C",
  rationaleCorrect: "Anaphylaxis is a severe, potentially life-threatening allergic reaction. Features include lip or facial swelling, difficulty breathing, wheeze, hypotension, rash, and collapse.",
  rationalesIncorrect: {
    A: "Drug intolerance usually refers to unpleasant side effects at normal doses, not a life-threatening allergic reaction.",
    B: "This is too general and does not identify the emergency condition."
  }
},

{
  question: "A female patient is being discharged after treatment for urinary tract infection. Which health education points can help prevent recurrence? I. Clean the perineum with warm soapy water after each bowel movement II. Empty the bladder regularly every 3 to 4 hours during the day III. Maintain adequate fluid intake of at least 3 litres daily, if not contraindicated",
  options: {
    A: "I and II",
    B: "II and III",
    C: "I and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "Regular bladder emptying helps prevent urinary stasis, and adequate fluid intake promotes urine flow and flushing of bacteria. These are important measures to reduce UTI recurrence.",
  rationalesIncorrect: {
    A: "Cleaning the perineum is important, but warm soapy washing after each bowel movement may irritate the area if done excessively. The stronger prevention pair is regular voiding and fluids.",
    C: "This misses regular bladder emptying, which is a key preventive measure."
  }
},

{
  question: "A group of students develop typhoid fever after eating from the same food vendor. Through which route was Salmonella typhi most likely transmitted?",
  options: {
    A: "Droplets from coughing or sneezing",
    B: "Unprotected sexual intercourse",
    C: "Consumption of contaminated food or water"
  },
  correctAnswer: "C",
  rationaleCorrect: "Typhoid fever is transmitted through the faecal-oral route, usually by ingestion of food or water contaminated with Salmonella typhi.",
  rationalesIncorrect: {
    A: "This is typical of many respiratory infections, not typhoid fever.",
    B: "Typhoid is not primarily a sexually transmitted infection."
  }
},

{
  question: "A known diabetic patient is being taught sick-day rules. Which instruction is most important during illness?",
  options: {
    A: "Limit fluid intake as much as possible",
    B: "Stop insulin when vomiting",
    C: "Consume frequent small carbohydrate meals"
  },
  correctAnswer: "C",
  rationaleCorrect: "During illness, diabetic patients should maintain carbohydrate intake, monitor glucose, stay hydrated, and usually continue diabetes medication or insulin as advised. Small frequent carbohydrate meals help prevent hypoglycaemia and ketosis.",
  rationalesIncorrect: {
    A: "Fluids should generally be encouraged to prevent dehydration unless contraindicated.",
    B: "Stopping insulin can precipitate diabetic ketoacidosis, especially in insulin-dependent patients."
  }
},

{
  question: "A hypertensive woman reports with severe abdominal pain and is diagnosed with acute gastritis. Which statement about acute gastritis is true?",
  options: {
    A: "It can result from chronic intake of non-steroidal analgesics",
    B: "It is primarily caused by lack of dietary fibre",
    C: "The gold standard for evaluation is colonoscopy"
  },
  correctAnswer: "A",
  rationaleCorrect: "Acute gastritis may result from irritation of the gastric mucosa by NSAIDs, alcohol, stress, infection, or other irritants. NSAIDs reduce protective prostaglandins and increase the risk of gastric mucosal injury.",
  rationalesIncorrect: {
    B: "Lack of fibre is more associated with constipation and some bowel conditions, not acute gastritis.",
    C: "Colonoscopy examines the large intestine. Gastritis is evaluated by upper gastrointestinal endoscopy when indicated."
  }
},{
  question: "A stool laboratory report for Mr. Seidu Issaka shows protozoa, helminths, and bacteria as causative agents. The doctor explains that the patient has concomitant infections. What does this mean?",
  options: {
    A: "One parasite in one host",
    B: "Two or more parasites or organisms in one host",
    C: "Several hosts infected by one parasite"
  },
  correctAnswer: "B",
  rationaleCorrect: "Concomitant infection means the patient has more than one infection at the same time. In this case, protozoa, helminths, and bacteria are present together.",
  rationalesIncorrect: {
    A: "This describes a single infection, not concomitant infection.",
    C: "This describes spread among hosts, not multiple infections in one patient."
  }
},

{
  question: "A patient with acute lymphocytic leukaemia is receiving chemotherapy. The nurse knows the patient is at high risk of infection due to bone marrow suppression. What is a major nursing objective?",
  options: {
    A: "Collect baseline data only for monitoring",
    B: "Prevent exposure to people with infections",
    C: "Improve response to change in nursing actions"
  },
  correctAnswer: "B",
  rationaleCorrect: "Chemotherapy suppresses the bone marrow and reduces white blood cell production, increasing the risk of infection. A major nursing objective is to protect the patient from infection by limiting exposure to infected persons and maintaining strict infection prevention practices.",
  rationalesIncorrect: {
    A: "Baseline data are useful, but they are not the major objective in this immunocompromised patient.",
    C: "This is vague and does not directly address the main risk of infection."
  }
},

{
  question: "A 35-year-old man admitted with severe sinus infection and bacterial meningitis develops acute renal failure after multiple medications. Which nursing intervention is most appropriate?",
  options: {
    A: "Check vital signs every four hours and report",
    B: "Monitor for signs of fluid volume excess",
    C: "Encourage unrestricted oral fluids"
  },
  correctAnswer: "B",
  rationaleCorrect: "In acute renal failure, the kidneys cannot effectively remove excess fluid and waste products. The nurse should monitor for fluid overload, including oedema, rising blood pressure, weight gain, crackles, and reduced urine output.",
  rationalesIncorrect: {
    A: "Vital signs are important, but this option is less specific to acute renal failure.",
    C: "This may worsen fluid overload if the kidneys cannot excrete the excess fluid."
  }
},

{
  question: "A 52-year-old man awaiting diagnosis is assessed on the medical ward. The nurse observes involuntary flapping movements of the hands when his arms are extended. This sign is commonly associated with metabolic liver dysfunction. What is it called?",
  options: {
    A: "Dystonia",
    B: "Asterixis",
    C: "Parkinsonism"
  },
  correctAnswer: "B",
  rationaleCorrect: "Asterixis is a flapping tremor commonly seen in hepatic encephalopathy and other metabolic disturbances. It is elicited when the patient extends the arms and dorsiflexes the wrists.",
  rationalesIncorrect: {
    A: "Dystonia involves sustained involuntary muscle contractions causing abnormal postures.",
    C: "Parkinsonism is associated with resting tremor, rigidity, bradykinesia, and postural instability."
  }
},

{
  question: "A man reports to the STI clinic with a long history of untreated urethral discharge. The nurse explains that untreated urethral discharge in men may result in which complications? I. Chancroid II. Epididymo-orchitis III. Infertility IV. Urethral stricture",
  options: {
    A: "II and III",
    B: "II, III and IV",
    C: "I, II and IV"
  },
  correctAnswer: "B",
  rationaleCorrect: "Untreated urethral infections may ascend and cause epididymo-orchitis. Long-standing infection and inflammation can also contribute to infertility and urethral strictures.",
  rationalesIncorrect: {
    A: "This is incomplete because urethral stricture is also a possible complication.",
    C: "Chancroid is a separate STI that causes painful genital ulcers. It is not a complication of untreated urethral discharge."
  }
},

{
  question: "A male patient is diagnosed with Vincent’s angina at the OPD. The nurse prepares to administer the treatment of choice. Which antibiotic is most appropriate?",
  options: {
    A: "Azithromycin",
    B: "Amoxicillin",
    C: "Penicillin"
  },
  correctAnswer: "C",
  rationaleCorrect: "Vincent’s angina is an acute ulcerative infection of the mouth and throat. Penicillin is commonly used as treatment, together with oral hygiene measures such as saline mouth washes.",
  rationalesIncorrect: {
    A: "This is not the best treatment of choice in the options given.",
    B: "Amoxicillin may treat many bacterial infections, but the classic answer for Vincent’s angina in this NMC-style question is penicillin."
  }
},

{
  question: "A middle-aged man is rushed to the emergency unit with severe difficulty in breathing. Initial assessment shows fluid accumulation in the lungs. Which position should the nurse use to ease breathing?",
  options: {
    A: "Semi-Fowler’s position",
    B: "Fowler’s position",
    C: "Prone position"
  },
  correctAnswer: "B",
  rationaleCorrect: "Fowler’s position helps improve lung expansion and reduces venous return to the heart, thereby easing breathing in patients with pulmonary congestion or pulmonary oedema.",
  rationalesIncorrect: {
    A: "Semi-Fowler’s may help mildly, but full Fowler’s is more appropriate when the patient has marked difficulty breathing.",
    C: "Prone positioning is not the immediate position of choice for pulmonary oedema in this setting."
  }
},

{
  question: "A minibus driver suddenly develops severe eye pain, blurred vision, coloured halos around lights, and tunnel vision. At the eye clinic, his cornea appears hazy and acute angle-closure glaucoma is suspected. His intraocular pressure may rise to:",
  options: {
    A: "32 mmHg",
    B: "22 mmHg",
    C: "50 mmHg"
  },
  correctAnswer: "C",
  rationaleCorrect: "Acute angle-closure glaucoma can cause a sudden marked rise in intraocular pressure, often with severe eye pain, reduced vision, halos around lights, red eye, and a cloudy cornea.",
  rationalesIncorrect: {
    A: "This is elevated but does not best represent the very high pressure expected in acute angle-closure glaucoma.",
    B: "This is only mildly elevated and does not fit the severe acute presentation."
  }
},

{
  question: "A mother brings her 16-year-old child to the hospital with suspected meningitis. During the early stage, which symptoms are most likely to be present?",
  options: {
    A: "Fever and headache",
    B: "Headache and neck stiffness",
    C: "Headache, nausea, and vomiting"
  },
  correctAnswer: "A",
  rationaleCorrect: "In the initial phase of meningitis, fever and headache may appear early. Neck stiffness and other meningeal signs may develop later as meningeal irritation progresses.",
  rationalesIncorrect: {
    B: "Neck stiffness is a classic sign but may not be present at the very initial phase.",
    C: "These may occur, but fever with headache is the stronger early presentation among the options."
  }
},

{
  question: "A 16-year-old student is admitted with suspected meningitis. The nurse is monitoring for progression from early symptoms to meningeal irritation. Which finding would most strongly suggest meningeal involvement?",
  options: {
    A: "Fever and headache",
    B: "Neck stiffness with headache",
    C: "Mild nausea after meals"
  },
  correctAnswer: "B",
  rationaleCorrect: "Neck stiffness with headache suggests irritation of the meninges and is a classic feature of meningitis. This question is a twisted version of the repeated meningitis item to test whether students can distinguish early symptoms from meningeal signs.",
  rationalesIncorrect: {
    A: "These are important early symptoms but are less specific for meningeal irritation.",
    C: "This is non-specific and does not strongly indicate meningitis."
  }
},

{
  question: "A newly diagnosed 42-year-old woman with diabetes is being discharged. The nurse teaches her to include fibre in her meals. What is one important benefit of dietary fibre?",
  options: {
    A: "It lowers total cholesterol and high-density lipoprotein",
    B: "It lowers total cholesterol and low-density lipoprotein",
    C: "It increases total cholesterol and low-density lipoprotein"
  },
  correctAnswer: "B",
  rationaleCorrect: "Dietary fibre, especially soluble fibre, helps reduce total cholesterol and LDL cholesterol. This is beneficial for diabetic patients because they are at increased cardiovascular risk.",
  rationalesIncorrect: {
    A: "HDL is the “good” cholesterol and should not be reduced.",
    C: "This would increase cardiovascular risk and is not a benefit of fibre."
  }
},

{
  question: "A nurse educator is teaching students about pulmonary embolism. The tutor asks which patient has the highest risk. Which answer is best?",
  options: {
    A: "A patient with coagulation disorder",
    B: "A patient on prolonged immobilization",
    C: "A patient with malignancy"
  },
  correctAnswer: "B",
  rationaleCorrect: "Prolonged immobilization increases venous stasis, which predisposes to deep vein thrombosis. A thrombus from the deep veins may dislodge and travel to the lungs, causing pulmonary embolism.",
  rationalesIncorrect: {
    A: "This can increase clotting risk, but in basic NMC-style teaching, prolonged immobilization is a classic and highly tested risk factor.",
    C: "Cancer can increase thrombosis risk, but prolonged immobilization is the best answer in this set."
  }
},

{
  question: "A nurse is educating patients with gout at the OPD. Which foods should the nurse encourage from the options below? I. Sardine II. Banana III. Wheat bread IV. Meat",
  options: {
    A: "I, III and IV",
    B: "II and III",
    C: "I and IV"
  },
  correctAnswer: "B",
  rationaleCorrect: "Patients with gout should reduce high-purine foods. Bananas and wheat bread are better choices compared with sardines and meat, which are higher in purines and may worsen gout.",
  rationalesIncorrect: {
    A: "This includes sardines and meat, which are high-purine foods.",
    C: "Both sardines and meat may worsen gout and should be limited."
  }
},

{
  question: "A nurse is assessing a patient with macrocytic anaemia suspected to be due to vitamin B12 deficiency. Which symptom is commonly associated with this condition?",
  options: {
    A: "Asterixis",
    B: "Hair thinning",
    C: "Tingling and numbness in the feet"
  },
  correctAnswer: "C",
  rationaleCorrect: "Vitamin B12 deficiency may cause neurological symptoms such as numbness, tingling, poor balance, and peripheral neuropathy. Macrocytic anaemia with neurological symptoms strongly suggests B12 deficiency.",
  rationalesIncorrect: {
    A: "Asterixis is more associated with hepatic encephalopathy or metabolic disorders.",
    B: "Hair thinning is not a classic defining feature of B12 deficiency."
  }
},

{
  question: "A nurse teaches bank workers how to prevent varicose veins because many of them stand or sit for long hours. Which recommendation is most appropriate?",
  options: {
    A: "Wear clean white cotton socks with shoes",
    B: "Wear support hose or thromboembolic deterrent stockings",
    C: "Perform only passive range-of-motion exercises"
  },
  correctAnswer: "B",
  rationaleCorrect: "Support stockings help improve venous return and reduce venous pooling in the legs. They are useful for preventing or reducing varicose veins in people who stand or sit for long periods.",
  rationalesIncorrect: {
    A: "Clean socks promote hygiene but do not prevent venous pooling.",
    C: "Active leg exercises and walking are more useful than passive movement alone."
  }
},

{
  question: "A nurse is treating a 70-year-old man with coronary artery disease and hypertension for acute low back pain. Which medication should be avoided due to cardiovascular concerns?",
  options: {
    A: "Acetaminophen",
    B: "Tramadol",
    C: "Naprosyn"
  },
  correctAnswer: "C",
  rationaleCorrect: "Naprosyn is naproxen, a non-steroidal anti-inflammatory drug. NSAIDs can worsen hypertension, cause fluid retention, and increase cardiovascular risk, especially in patients with coronary artery disease.",
  rationalesIncorrect: {
    A: "Acetaminophen is generally safer for pain in patients with cardiovascular risk when used within recommended doses.",
    B: "Tramadol has other safety concerns, but it is not the main cardiovascular concern among these options."
  }
},

{
  question: "A nurse prepares a care plan for a patient admitted with acute gouty arthritis affecting the right foot. Which nursing intervention is best?",
  options: {
    A: "Administer aspirin",
    B: "Apply cold or warm compresses as tolerated",
    C: "Provide foods high in purines"
  },
  correctAnswer: "B",
  rationaleCorrect: "During acute gout pain, non-pharmacological measures include resting the affected joint and applying cold or warm compresses depending on patient comfort and local protocol. This helps reduce pain and inflammation.",
  rationalesIncorrect: {
    A: "Aspirin may affect uric acid levels and can worsen gout depending on dose.",
    C: "High-purine foods increase uric acid production and may worsen gout."
  }
},

{
  question: "A patient with diabetic ketoacidosis has a nursing diagnosis of fluid and electrolyte imbalance related to fluid loss and shifts. Which IV fluid should the nurse prepare initially?",
  options: {
    A: "Dextrose in saline",
    B: "4.3% in 1/5 normal saline",
    C: "0.9% normal saline"
  },
  correctAnswer: "C",
  rationaleCorrect: "Initial management of DKA includes rapid restoration of circulating volume with isotonic fluid, commonly 0.9% normal saline, before adjusting fluids based on glucose, sodium, potassium, and clinical status.",
  rationalesIncorrect: {
    A: "Dextrose-containing fluids may be added later when blood glucose falls, not as the initial fluid in most DKA cases.",
    B: "This is not the standard initial resuscitation fluid for DKA."
  }
},

{
  question: "A patient with ischaemic stroke has impaired verbal communication related to brain damage. Which nursing action is most appropriate?",
  options: {
    A: "Provide pen and paper for the patient to write",
    B: "Establish eye contact when communicating with the patient",
    C: "Allow the patient to ask questions about words he does not understand"
  },
  correctAnswer: "B",
  rationaleCorrect: "For impaired verbal communication after stroke, the nurse should face the patient, maintain eye contact, speak slowly, use simple words, and allow enough time for response. This promotes effective communication and reduces frustration.",
  rationalesIncorrect: {
    A: "This may help some patients, but not all stroke patients can write, especially if weakness or language impairment is present.",
    C: "This may not be possible if the patient has impaired verbal communication."
  }
},

{
  question: "A child with protein-energy malnutrition has a nursing diagnosis of imbalanced nutrition less than body requirements. What should the nurse consider when planning care?",
  options: {
    A: "Modify favourite foods to improve acceptance",
    B: "Provide highly nutritious meals only once daily",
    C: "Serve IV fluids whenever the patient refuses food"
  },
  correctAnswer: "A",
  rationaleCorrect: "For malnutrition, food should be nutritious, acceptable, culturally appropriate, and offered in a way the patient can tolerate. Modifying favourite foods can improve intake and adherence.",
  rationalesIncorrect: {
    B: "Small frequent nutritious meals are usually better tolerated than one large meal.",
    C: "IV fluids do not replace nutritional rehabilitation unless clinically indicated."
  }
},

{
  question: "A 40-year-old patient with bronchial asthma is rushed to the emergency unit with severe difficulty in breathing. Which nursing diagnosis is most appropriate?",
  options: {
    A: "Ineffective breathing pattern related to dyspnoea",
    B: "Impaired physical mobility related to dyspnoea",
    C: "Caregiver role strain related to dyspnoea"
  },
  correctAnswer: "A",
  rationaleCorrect: "The patient’s immediate problem is respiratory difficulty. In asthma, airway narrowing causes dyspnoea, use of accessory muscles, wheezing, and altered breathing pattern. Therefore, ineffective breathing pattern is the priority nursing diagnosis.",
  rationalesIncorrect: {
    B: "Mobility may be affected, but breathing is the priority.",
    C: "This does not address the patient’s immediate emergency need."
  }
},

{
  question: "A 44-year-old patient with chronic renal failure develops metabolic acidosis. The nurse understands that this occurs because the kidneys fail to excrete hydrogen ions and regenerate bicarbonate. Which pattern is expected?",
  options: {
    A: "Low hydrogen, high ammonia, low bicarbonate",
    B: "High hydrogen, low ammonia, low bicarbonate",
    C: "Low hydrogen, low ammonia, high bicarbonate"
  },
  correctAnswer: "B",
  rationaleCorrect: "In chronic renal failure, the kidneys have reduced ability to excrete hydrogen ions and generate ammonia for acid excretion. Bicarbonate levels fall, resulting in metabolic acidosis.",
  rationalesIncorrect: {
    A: "Hydrogen ions are retained, not reduced.",
    C: "This pattern does not fit metabolic acidosis."
  }
},

{
  question: "A patient asks the nurse, “Should I tell my husband I am HIV positive?” Which response is most therapeutic?",
  options: {
    A: "“Are you having difficulty deciding what to say?”",
    B: "“Do not tell him anything unless he asks.”",
    C: "“This is a decision you need to make alone.”"
  },
  correctAnswer: "A",
  rationaleCorrect: "This response uses therapeutic communication. It encourages the patient to express feelings and concerns without judgment, while allowing the nurse to explore fears, support disclosure planning, and promote safe decision-making.",
  rationalesIncorrect: {
    B: "This is inappropriate and may increase risk to the partner.",
    C: "This abandons the patient emotionally and does not provide support."
  }
},

{
  question: "A patient is admitted with acidosis. Which sign or symptom is the nurse most likely to notice?",
  options: {
    A: "Convulsions",
    B: "Irregular heartbeat",
    C: "Altered mental status"
  },
  correctAnswer: "C",
  rationaleCorrect: "Acidosis affects central nervous system function and may cause confusion, drowsiness, lethargy, and altered level of consciousness. Severe acidosis can progress to coma if untreated.",
  rationalesIncorrect: {
    A: "Seizures may occur in some severe metabolic disturbances but are not the most typical noticeable sign.",
    B: "Arrhythmias may occur, especially with electrolyte abnormalities, but altered mental status is a common noticeable feature of acidosis."
  }
},

{
  question: "A patient with rheumatoid arthritis complains of severe pain in both wrist joints. Which non-pharmacological nursing intervention can help relieve pain?",
  options: {
    A: "Assist the patient with a warm bath or shower",
    B: "Encourage vigorous exercise of the affected joints",
    C: "Perform deep massage directly over the painful joints"
  },
  correctAnswer: "A",
  rationaleCorrect: "Warmth helps relax muscles, reduce stiffness, and relieve pain in rheumatoid arthritis. Warm baths or showers are useful, especially when stiffness is present.",
  rationalesIncorrect: {
    B: "During painful flare-ups, vigorous exercise can worsen inflammation and pain.",
    C: "Deep massage over inflamed joints may worsen pain and tissue irritation."
  }
},

{
  question: "A patient with chronic oesophagitis is booked for oesophagogastroduodenoscopy. The nurse teaches the patient to remain nil per os for how many hours before the procedure?",
  options: {
    A: "10 hours",
    B: "8 hours",
    C: "6 hours"
  },
  correctAnswer: "C",
  rationaleCorrect: "Patients are commonly instructed to fast for about 6 hours before upper gastrointestinal endoscopy to reduce the risk of aspiration and allow better visualization.",
  rationalesIncorrect: {
    A: "This is longer than the usual required fasting period.",
    B: "Eight hours may be used in some protocols, but the common NMC-style answer for upper GI endoscopy fasting is 6 hours."
  }
},

{
  question: "A patient with liver cirrhosis has laboratory results showing abnormal liver enzymes. Which finding is most consistent with cirrhosis?",
  options: {
    A: "Raised serum glutamic oxaloacetic transaminase",
    B: "Increased serum albumin with normal prothrombin time",
    C: "Increased serum magnesium with normal prothrombin time"
  },
  correctAnswer: "A",
  rationaleCorrect: "Cirrhosis may be associated with raised liver enzymes, including serum glutamic oxaloacetic transaminase, also known as AST. Liver synthetic function may also be impaired, causing low albumin and prolonged prothrombin time in advanced disease.",
  rationalesIncorrect: {
    B: "In cirrhosis, albumin may be low, and prothrombin time may be prolonged due to impaired liver synthesis.",
    C: "This is not a typical key laboratory pattern used to support cirrhosis."
  }
},{
  question: "A patient with coeliac disease is admitted with severe abdominal pain, nausea, vomiting, and diarrhoea after eating wheat-based food. The nurse is planning care. Which of the following should not be included in the nursing management?",
  options: {
    A: "Replace fluid and electrolytes and administer prescribed supplements",
    B: "Educate the patient on gluten-free diet and vitamin/mineral supplementation",
    C: "Encourage intake of cereals, crackers, noodles, and wheat"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clue is coeliac disease. Coeliac disease is triggered by gluten, which is found in wheat, barley, and rye. Foods such as wheat, noodles, crackers, and many cereals may contain gluten and can worsen intestinal inflammation, diarrhoea, abdominal pain, and malabsorption.",
  rationalesIncorrect: {
    A: "This is correct nursing care because diarrhoea and vomiting can cause dehydration and electrolyte imbalance.",
    B: "This is also correct because patients with coeliac disease need lifelong gluten avoidance and may need supplements due to malabsorption."
  }
},

{
  question: "A patient with oesophageal varices suddenly vomits a large amount of bright red blood and becomes breathless. The nurse is called urgently to the bedside. What should be the immediate nursing action?",
  options: {
    A: "Call for help, check vital signs, reassure and position the patient",
    B: "Call for help, assess level of consciousness, check vital signs, secure IV access, and reassure the patient",
    C: "Call for help, assess level of consciousness, check vital signs, and reassure the patient only"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is vomiting large volumes of bright red blood. This suggests active upper gastrointestinal bleeding from ruptured oesophageal varices. This is an emergency because the patient can rapidly go into shock. The nurse must call for help, assess consciousness, monitor vital signs, and secure IV access for fluids, blood products, and emergency medications.",
  rationalesIncorrect: {
    A: "This is partly correct, but it is incomplete because it does not include securing IV access, which is vital in massive bleeding.",
    C: "This is also incomplete because reassurance alone will not manage the risk of shock. IV access is urgently needed."
  }
},

{
  question: "A patient with leukaemia receiving chemotherapy develops painful mouth ulcers, a burning sensation, difficulty swallowing, and a red beefy tongue. The nurse suspects chemotherapy-induced oral mucositis. Which instructions are appropriate? I. Avoid hot drinks, spicy foods, salty foods, and citrus fruits II. Use hot gargles daily to cleanse the mouth III. Take prescribed pain relievers as recommended IV. Gargle with cool water and suck ice chips or ice pops",
  options: {
    A: "I, III and IV",
    B: "I, II and III",
    C: "II, III and IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is painful mouth ulcers after chemotherapy. Chemotherapy can damage the oral mucosa, causing mucositis. The patient should avoid foods that irritate the mouth, such as hot, spicy, salty, and citrus foods. Pain relief helps the patient eat and drink. Cool water, ice chips, and ice pops may soothe the mouth and reduce discomfort.",
  rationalesIncorrect: {
    B: "This includes hot gargles. Hot gargles can worsen pain and irritation in an already inflamed mouth.",
    C: "This also includes hot gargles and leaves out the important instruction to avoid irritating foods."
  }
},

{
  question: "A patient with suspected meningitis is scheduled for lumbar puncture. The nurse explains that the spinal needle is usually inserted between which vertebral spaces?",
  options: {
    A: "L2–L3",
    B: "L3–L4",
    C: "L1–L2"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key point is safety. The spinal cord usually ends around the level of L1–L2 in adults. Lumbar puncture is therefore performed below this level, commonly at L3–L4 or L4–L5, to reduce the risk of spinal cord injury.",
  rationalesIncorrect: {
    A: "This may be closer to the lower end of the spinal cord and is not the best answer in this NMC-style question.",
    C: "This is too high and increases the risk of damaging the spinal cord."
  }
},

{
  question: "A patient admitted with severe hypertension is also being managed for gastritis. The nurse understands that the gastritis may most likely be related to:",
  options: {
    A: "Disease condition and stress",
    B: "Excessive production of gastric juice only",
    C: "Medications and stress"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clue is that the patient is admitted with a serious condition and is receiving treatment. Gastritis may occur due to stress from severe illness and irritation of the gastric mucosa by some medications. Stress and drugs are common causes of acute gastritis in hospitalised patients.",
  rationalesIncorrect: {
    A: "Stress is correct, but this option does not include medication, which is a common cause of gastritis in admitted patients.",
    B: "Gastritis is not caused only by excess gastric juice. It involves inflammation and irritation of the stomach lining."
  }
},

{
  question: "A patient experiencing an ischaemic stroke develops difficulty speaking clearly. Which neurological symptom is this?",
  options: {
    A: "Dyscrasia",
    B: "Dysarthria",
    C: "Dysthymia"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is difficulty speaking clearly. Dysarthria means difficulty articulating words due to weakness or poor coordination of the muscles used for speech. It can occur in stroke when areas controlling speech muscles are affected.",
  rationalesIncorrect: {
    A: "Dyscrasia refers to an abnormal condition of the blood, not speech difficulty.",
    C: "Dysthymia is a persistent depressive mood disorder, not a neurological speech symptom."
  }
},

{
  question: "A patient admitted with bacterial meningitis suddenly develops a seizure. What should the nurse do?",
  options: {
    A: "Observe the body movements, note the time of onset, and record the duration of the seizure",
    B: "Restrain the patient firmly with stirrups",
    C: "Tepid sponge the patient immediately to reduce fever"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is seizure during meningitis. During a seizure, the nurse should protect the patient from injury, observe the type of movements, note the time the seizure started, record how long it lasted, and report findings. These details help the medical team assess severity and guide treatment.",
  rationalesIncorrect: {
    B: "The nurse should not restrain a convulsing patient because this can cause injury.",
    C: "Fever control is important, but it is not the priority during an active seizure."
  }
},

{
  question: "A patient with hypocalcaemia develops twitching of the facial muscles when the nurse taps over the facial nerve. What is this sign called?",
  options: {
    A: "Rovsing’s sign",
    B: "Trousseau’s sign",
    C: "Chvostek’s sign"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clue is facial twitching after tapping the facial nerve. This is Chvostek’s sign, which occurs due to increased neuromuscular excitability in hypocalcaemia.",
  rationalesIncorrect: {
    A: "Rovsing’s sign is associated with appendicitis, not hypocalcaemia.",
    B: "Trousseau’s sign is carpal spasm caused by inflating a blood pressure cuff, not facial twitching."
  }
},

{
  question: "A patient is admitted with haemoptysis, chronic cough, and weakness. Which respiratory disorder is most likely?",
  options: {
    A: "Empyema",
    B: "Pneumonia",
    C: "Bronchiectasis"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clues are haemoptysis and chronic cough. Bronchiectasis involves permanent widening of the bronchi, leading to chronic infection, persistent cough, sputum production, and sometimes coughing of blood.",
  rationalesIncorrect: {
    A: "Empyema is pus in the pleural space. It may cause fever and chest pain but does not classically present with chronic haemoptysis.",
    B: "Pneumonia can cause cough and fever, but haemoptysis with chronic cough points more strongly to bronchiectasis."
  }
},

{
  question: "A patient is admitted with pericarditis. The nurse explains to a student that common causes include: I. Infections II. Brain injury III. Renal failure",
  options: {
    A: "I and II",
    B: "I and III",
    C: "II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key condition is pericarditis, which means inflammation of the pericardium. It can be caused by infections, especially viral infections, and by uraemia in renal failure. Brain injury is not a common direct cause of pericarditis.",
  rationalesIncorrect: {
    A: "Infection is correct, but brain injury is not a typical cause.",
    C: "Renal failure is correct, but brain injury is not."
  }
},

{
  question: "A patient with haemolytic jaundice is being assessed on the ward. Which finding is the nurse most likely to observe?",
  options: {
    A: "Dark brown urine",
    B: "Fatty stool",
    C: "Clay-coloured stool"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is haemolytic jaundice, which occurs when red blood cells are broken down excessively. This increases bilirubin production. Increased bilirubin pigment can make urine appear dark.",
  rationalesIncorrect: {
    B: "Fatty stool is more related to fat malabsorption, pancreatic disease, or bile obstruction.",
    C: "Clay-coloured stool is more typical of obstructive jaundice, where bile cannot reach the intestine."
  }
},

{
  question: "A patient is prescribed 3000 mL of IV fluid over 12 hours. The giving set has a drop factor of 10 drops/mL. How many drops per minute should the nurse regulate the flow?",
  options: {
    A: "30–32 drops/minute",
    B: "27–29 drops/minute",
    C: "40–42 drops/minute"
  },
  correctAnswer: "C",
  rationaleCorrect: "Use the formula: Drops/min = Volume × Drop factor ÷ Time in minutes. Volume = 3000 mL. Drop factor = 10 drops/mL. Time = 12 hours × 60 = 720 minutes. 3000 × 10 ÷ 720 = 41.6 drops/minute. This is approximately 42 drops/minute.",
  rationalesIncorrect: {
    A: "This would deliver the fluid too slowly.",
    B: "This is also too slow and would not complete 3000 mL in 12 hours."
  }
},

{
  question: "A patient with type 1 diabetes develops insulin coma. Which factors could have caused this? I. Inadequate food intake II. Increased insulin dose III. Skipping insulin dose IV. Strenuous exercise",
  options: {
    A: "I, II and IV",
    B: "II, III and IV",
    C: "I, II and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "Insulin coma occurs due to severe hypoglycaemia. It may happen when a patient takes too much insulin, eats too little food, delays meals, or performs strenuous exercise without enough carbohydrate intake.",
  rationalesIncorrect: {
    B: "Skipping insulin usually causes hyperglycaemia and may lead to diabetic ketoacidosis, not insulin coma.",
    C: "Inadequate food and increased insulin are correct, but skipping insulin is not a cause of insulin coma."
  }
},

{
  question: "A patient with heart failure receiving treatment develops vomiting, diarrhoea, and abdominal pain. Which drug may be responsible?",
  options: {
    A: "Diuretics",
    B: "Hydralazine",
    C: "Digoxin"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clues are vomiting, diarrhoea, and abdominal pain in a heart failure patient on treatment. These are common early symptoms of digoxin toxicity. Digoxin has a narrow therapeutic range, so toxicity can occur, especially in older patients, renal impairment, or electrolyte imbalance.",
  rationalesIncorrect: {
    A: "Diuretics can cause electrolyte imbalance and dehydration, but vomiting and diarrhoea with abdominal pain strongly suggest digoxin toxicity.",
    B: "Hydralazine may cause headache, dizziness, tachycardia, or lupus-like symptoms, but it is not the best answer here."
  }
},

{
  question: "A patient has been receiving 5% dextrose IV fluid for a long period and begins to lose weight. What is the most likely reason?",
  options: {
    A: "Increased concentration of electrolytes in the cells",
    B: "Lack of protein supplementation",
    C: "Insufficient carbohydrate intake"
  },
  correctAnswer: "B",
  rationaleCorrect: "5% dextrose provides water and some carbohydrate calories, but it does not provide protein, fat, vitamins, or minerals. Long-term use without adequate nutrition can lead to muscle wasting and weight loss because the body breaks down its own protein stores.",
  rationalesIncorrect: {
    A: "This does not explain weight loss from prolonged 5% dextrose infusion.",
    C: "5% dextrose provides carbohydrate, so the bigger problem is lack of protein and complete nutrition."
  }
},

{
  question: "A burns patient complains of abdominal pain, burning sensation in the stomach, and bloating. The nurse suspects gastritis due to the stress of severe burns. What type of gastritis is this?",
  options: {
    A: "Chronic stress gastritis",
    B: "Acute stress gastritis",
    C: "Erosive stress gastritis"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is burns. Severe burns are a major physiological stressor and can cause acute stress-related gastric mucosal injury. This may present with epigastric pain, burning sensation, bloating, and sometimes bleeding.",
  rationalesIncorrect: {
    A: "The symptoms occur in relation to an acute severe stressor, not a long-term chronic condition.",
    C: "Erosive gastritis may occur if the mucosa becomes damaged and bleeding occurs, but the broader and best answer here is acute stress gastritis."
  }
},

{
  question: "A patient on the ward develops dysrhythmia. Which nursing diagnoses may be included in the care plan? I. Anxiety related to fear of the unknown II. Decreased cardiac output III. Deficient knowledge about the dysrhythmia and its treatment",
  options: {
    A: "I, II and III",
    B: "I and II",
    C: "II and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "Dysrhythmias can reduce the heart’s ability to pump effectively, causing decreased cardiac output. The patient may also become anxious because of palpitations, chest discomfort, or fear of sudden death. Education is also needed because the patient must understand the condition, medications, warning signs, and follow-up care.",
  rationalesIncorrect: {
    B: "This misses deficient knowledge, which is important for long-term management.",
    C: "This misses anxiety, which is common in patients with abnormal heart rhythm."
  }
},

{
  question: "A patient diagnosed with rabies is being assessed. Which characteristic feature would the nurse expect?",
  options: {
    A: "Memory loss",
    B: "Pharyngeal spasm",
    C: "Urinary stasis"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is rabies. Rabies affects the nervous system and can cause painful spasms of the throat and pharynx, especially when the patient tries to swallow. This explains the classic fear of water, known as hydrophobia.",
  rationalesIncorrect: {
    A: "Memory problems are not the characteristic feature tested in rabies.",
    C: "Urinary retention may occur in some neurological disorders, but it is not the hallmark of rabies."
  }
},

{
  question: "A patient with Addison’s disease is being managed with hydrocortisone. The nurse understands that Addison’s disease results from malfunction of which gland?",
  options: {
    A: "Pituitary gland",
    B: "Adrenal gland",
    C: "Hypothalamus"
  },
  correctAnswer: "B",
  rationaleCorrect: "Addison’s disease is primary adrenal insufficiency. The adrenal cortex fails to produce enough cortisol and often aldosterone. Hydrocortisone is given to replace deficient cortisol.",
  rationalesIncorrect: {
    A: "Pituitary disease can cause secondary adrenal insufficiency, but Addison’s disease specifically refers to primary adrenal gland failure.",
    C: "The hypothalamus helps regulate hormone release, but it is not the gland primarily affected in Addison’s disease."
  }
},

{
  question: "A patient presents with a smooth, sore, red tongue and mild diarrhoea. Which type of anaemia is most likely?",
  options: {
    A: "Megaloblastic anaemia",
    B: "Pernicious anaemia",
    C: "Iron deficiency anaemia"
  },
  correctAnswer: "A",
  rationaleCorrect: "A smooth, sore, red tongue is called glossitis and is commonly seen in megaloblastic anaemia due to vitamin B12 or folate deficiency. Mild diarrhoea may also occur due to epithelial cell changes in the gastrointestinal tract.",
  rationalesIncorrect: {
    B: "Pernicious anaemia is a type of megaloblastic anaemia caused by vitamin B12 deficiency due to lack of intrinsic factor. However, the broader answer here is megaloblastic anaemia.",
    C: "Iron deficiency anaemia more commonly presents with pallor, fatigue, brittle nails, and sometimes pica, not classically with megaloblastic changes."
  }
},

{
  question: "A patient with multiple sclerosis asks the nurse about the prognosis of the condition. What is the most appropriate response?",
  options: {
    A: "There is no cure for the condition, but treatment can help control symptoms and slow progression.",
    B: "If urinary complications do not occur, you will get well completely.",
    C: "If you take your medications as prescribed, you will be cured."
  },
  correctAnswer: "A",
  rationaleCorrect: "The key issue is therapeutic and truthful communication. Multiple sclerosis is a chronic neurological disease. There is currently no complete cure, but medications, rehabilitation, and good nursing care can reduce relapses, manage symptoms, and improve quality of life.",
  rationalesIncorrect: {
    B: "This gives false hope. Urinary complications are only one possible problem; avoiding them does not cure MS.",
    C: "This is inaccurate because treatment controls the disease but does not cure it."
  }
},

{
  question: "A patient presents with hypoalbuminaemia. During a tutorial, the ward in-charge explains that possible causes include: I. Damaged gastrointestinal tract II. Infections III. Stress",
  options: {
    A: "II and III",
    B: "I and II",
    C: "I, II and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "Albumin may become low when the body cannot absorb or retain protein, when inflammation is present, or during severe stress. A damaged gastrointestinal tract can reduce protein absorption or cause protein loss. Infections and stress can also reduce albumin because albumin falls during inflammatory states.",
  rationalesIncorrect: {
    A: "This leaves out damaged gastrointestinal tract, which can contribute to low albumin.",
    B: "This leaves out stress, which can also reduce albumin levels during severe illness."
  }
},

{
  question: "A patient receiving blood transfusion develops fever and chills two hours after the transfusion started. Vital signs are stable. What is the most likely cause?",
  options: {
    A: "ABO incompatibility",
    B: "Leukoagglutination reaction",
    C: "Host antibody response to donor white blood cell antigens"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clues are fever and chills during transfusion with stable vital signs. This suggests a febrile non-haemolytic transfusion reaction. It commonly occurs when the recipient’s antibodies react against donor white blood cell antigens or cytokines in the blood product.",
  rationalesIncorrect: {
    A: "ABO incompatibility is more severe and may cause fever, chills, back pain, hypotension, haemoglobinuria, shock, and renal failure.",
    B: "This is more associated with transfusion-related lung injury, which presents with acute respiratory distress, hypoxia, and pulmonary oedema-like features."
  }
},

{
  question: "A patient reports to the emergency unit with right upper quadrant pain and heartburn. Which condition is the most likely cause?",
  options: {
    A: "Chronic gastric ulcer",
    B: "Chronic pancreatitis",
    C: "Chronic duodenal ulcer"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clues are upper abdominal pain and heartburn. Duodenal ulcer pain is often felt in the epigastric or right upper abdominal area and may be associated with burning discomfort. It is commonly related to acid irritation of the duodenal mucosa.",
  rationalesIncorrect: {
    A: "Gastric ulcer pain is usually more epigastric and often worsens shortly after meals.",
    B: "Chronic pancreatitis usually causes persistent epigastric pain that may radiate to the back and is often associated with alcohol use, malabsorption, or weight loss."
  }
},{
  question: "A 28-year-old woman reports to the STI clinic with painful, itchy blisters around the genital area. The nurse suspects a herpetic infection and prepares the patient for investigations. Which investigation is least relevant in confirming or supporting this diagnosis?",
  options: {
    A: "ELISA test",
    B: "Complete blood count",
    C: "Blood glucose level"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clue is painful itchy genital blisters, which suggests herpes infection. Investigations may include specific viral tests or serological tests such as ELISA, and a complete blood count may support assessment of infection. Blood glucose level does not help confirm herpes infection.",
  rationalesIncorrect: {
    A: "This may be used to detect antibodies or support diagnosis of viral infections.",
    B: "This may show evidence of infection or immune response, although it is not diagnostic."
  }
},

{
  question: "A 45-year-old woman reports to the OPD with right upper abdominal pain that becomes worse after eating fried rice and fatty meat. She also feels nauseated after meals. Which condition is most likely?",
  options: {
    A: "Cholecystitis",
    B: "Hepatitis",
    C: "Pancreatitis"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is right upper quadrant pain worsened by fatty meals. Fatty foods stimulate the gallbladder to contract. If the gallbladder is inflamed or obstructed by stones, this causes pain, especially after fatty meals.",
  rationalesIncorrect: {
    B: "Hepatitis may cause right upper quadrant discomfort, jaundice, malaise, and anorexia, but pain specifically worsened by fatty meals points more to gallbladder disease.",
    C: "Pancreatitis usually causes severe epigastric pain that may radiate to the back, often associated with vomiting."
  }
},

{
  question: "A patient with a known history of psoriasis reports to the dermatology clinic with worsening skin lesions. Which assessment finding would the nurse expect?",
  options: {
    A: "Multiple petechiae",
    B: "Shiny silvery scaly lesions",
    C: "Erythematous macules only"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is psoriasis. Psoriasis commonly presents with well-demarcated erythematous plaques covered with silvery-white scales, commonly on the elbows, knees, scalp, and lower back.",
  rationalesIncorrect: {
    A: "Petechiae are small bleeding spots under the skin, usually related to platelet or clotting problems.",
    C: "Psoriasis is typically raised plaques with scaling, not just flat red macules."
  }
},

{
  question: "A patient is admitted with enteritis after several episodes of diarrhoea, abdominal cramps, nausea, and vomiting. The nurse monitors for complications. Which of the following is not a complication of enteritis?",
  options: {
    A: "Poor urine output",
    B: "Severe fatigue",
    C: "Loss of appetite"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key phrase is not a complication. Enteritis may cause dehydration, leading to poor urine output, weakness, and severe fatigue. Loss of appetite is a symptom of the illness, not a major complication.",
  rationalesIncorrect: {
    A: "This may indicate dehydration, which is a serious complication of diarrhoea and vomiting.",
    B: "This may result from dehydration, electrolyte imbalance, or systemic illness."
  }
},

{
  question: "A patient reports with fever, sweating, joint pains, weakness, and a changed heart murmur. On examination, atrial and ventricular gallops are heard. Infective endocarditis is diagnosed. Which management plan is appropriate? I. Antibiotics II. Bed rest III. Vital signs monitoring IV. Surgery if needed",
  options: {
    A: "I, III and IV",
    B: "I, II, III and IV",
    C: "I, II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is infective endocarditis, an infection of the inner lining of the heart and valves. Management includes prolonged antibiotics, rest during the acute phase, monitoring of vital signs and cardiac status, and surgery if there is valve destruction, heart failure, or uncontrolled infection.",
  rationalesIncorrect: {
    A: "This leaves out bed rest, which may be needed during the acute phase.",
    C: "This leaves out surgery, which may be required in complicated cases."
  }
},

{
  question: "A patient reports with heartburn, retrosternal chest discomfort, difficulty swallowing, and frequent regurgitation of sour-tasting food, especially when lying down. A student nurse asks how GERD differs from oesophagitis. Which feature best supports GERD?",
  options: {
    A: "Degree of chest pain and burning sensation",
    B: "Difficulty swallowing and hoarseness of voice",
    C: "Regurgitation of food and sensation of a lump in the throat"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clue is reflux of stomach contents. GERD is mainly due to backflow of gastric contents into the oesophagus, causing regurgitation, heartburn, sour taste, and sometimes a lump sensation in the throat.",
  rationalesIncorrect: {
    A: "Both GERD and oesophagitis can cause burning chest discomfort, so this does not clearly differentiate them.",
    B: "These may occur in GERD, but they can also occur with oesophagitis or other throat and oesophageal conditions."
  }
},

{
  question: "A patient with stomatitis complains that mouth pain makes eating difficult. On examination, the oral mucosa is red and tender. Which intervention will give the most direct pain relief?",
  options: {
    A: "Meticulous mouth care after meals",
    B: "Application of lubricating ointment",
    C: "Use of topical analgesics"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key phrase is comfort and pain relief. Topical analgesics act directly on the painful oral mucosa and reduce pain, making it easier for the patient to eat and drink.",
  rationalesIncorrect: {
    A: "This promotes cleanliness and healing but does not provide the most direct pain relief.",
    B: "This may reduce dryness and irritation, but it is not as effective for pain relief as topical analgesics."
  }
},

{
  question: "A patient is rushed to the emergency unit with severe dehydration after chronic gastroenteritis. He is weak, has poor skin turgor, dry mucous membranes, and reduced urine output. Which complication should the nurse anticipate if treatment is delayed?",
  options: {
    A: "Deep vein thrombosis",
    B: "Cardiogenic shock",
    C: "Acute renal failure"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clue is severe dehydration with reduced urine output. When circulating fluid volume falls, blood flow to the kidneys decreases. If not corrected promptly, this can lead to acute kidney injury or acute renal failure.",
  rationalesIncorrect: {
    A: "Dehydration may increase blood viscosity, but acute renal failure is the more direct and expected complication.",
    B: "Cardiogenic shock is caused by pump failure of the heart, not primarily by dehydration."
  }
},

{
  question: "A patient with stroke has right-sided hemiplegia. A student nurse wants to check the blood pressure on the affected right arm. Why should this be avoided?",
  options: {
    A: "It may produce inaccurate readings",
    B: "It may cause excessive pressure on the brachial artery",
    C: "It may precipitate thrombus formation"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is right hemiplegia. The affected limb may have altered muscle tone, reduced movement, and impaired circulation. These changes can make blood pressure readings less reliable. The unaffected arm is preferred.",
  rationalesIncorrect: {
    B: "A blood pressure cuff applies pressure temporarily, but this is not the main reason the affected arm is avoided.",
    C: "Checking blood pressure does not usually cause thrombus formation."
  }
},

{
  question: "A woman with a history of recurrent cystitis reports urgency, dysuria, and frequency for seven days. Which statement suggests that the infection may have spread beyond simple cystitis?",
  options: {
    A: "“I feel nauseated and I cannot keep my food down.”",
    B: "“I pass urine very often.”",
    C: "“I feel burning whenever I urinate.”"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key phrase is more than cystitis. Simple cystitis usually causes dysuria, urgency, and frequency. Nausea and vomiting suggest systemic involvement or possible upper urinary tract infection such as pyelonephritis.",
  rationalesIncorrect: {
    B: "Frequency is common in uncomplicated cystitis.",
    C: "Dysuria is also typical of cystitis."
  }
},

{
  question: "A patient diagnosed with pulmonary emphysema is being assessed on the ward. Which clinical features are expected? I. Chronic cough II. Increasing shortness of breath III. Copious purulent sputum IV. Wheezing respiration",
  options: {
    A: "II, III and IV",
    B: "I, II and IV",
    C: "I, II and III"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key condition is emphysema, a form of COPD characterized by alveolar destruction and air trapping. Patients commonly have chronic cough, progressive shortness of breath, and wheezing. Copious purulent sputum is more typical of chronic bronchitis or infection.",
  rationalesIncorrect: {
    A: "This includes copious purulent sputum, which is not a classic feature of emphysema.",
    C: "This also includes copious purulent sputum and excludes wheezing."
  }
},

{
  question: "A patient with acute pericarditis complains of sharp chest pain that becomes worse when lying flat and improves when sitting forward. Which nursing intervention is best?",
  options: {
    A: "Place the patient in right lateral position with the head elevated",
    B: "Administer prescribed opioids and monitor response",
    C: "Place the patient in Fowler’s position and allow leaning forward on a padded table"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key clue is pericarditis chest pain relieved by sitting forward. Sitting upright and leaning forward reduces pressure and friction between the inflamed pericardial layers, helping to relieve pain and ease breathing.",
  rationalesIncorrect: {
    A: "This does not specifically relieve pericarditis pain.",
    B: "Analgesics may help, but positioning is the best immediate nursing intervention in this question."
  }
},

{
  question: "A patient with an aneurysm suddenly develops intense persistent chest pain radiating to the back, hypotension, and shortness of breath. Which type of aneurysm is most likely?",
  options: {
    A: "Cerebral aneurysm",
    B: "Thoracic aneurysm",
    C: "Ventricular aneurysm"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is chest pain radiating to the back. This is highly suggestive of thoracic aortic aneurysm or dissection. Hypotension and shortness of breath indicate possible rupture or severe circulatory compromise.",
  rationalesIncorrect: {
    A: "This commonly presents with sudden severe headache, neurological signs, or subarachnoid haemorrhage.",
    C: "This may occur after myocardial infarction and is associated with heart failure or arrhythmias, not tearing chest pain radiating to the back."
  }
},

{
  question: "A patient with suspected duodenal ulcer tells the nurse, “The pain feels like gnawing hunger pain, but it gets better after I eat.” Which description best fits duodenal ulcer pain?",
  options: {
    A: "Gnawing sensation relieved by food",
    B: "Intermittent colicky flank pain",
    C: "Ache radiating to the left side"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is pain relieved by food. Duodenal ulcer pain often occurs when the stomach is empty and may improve temporarily after eating or taking antacids.",
  rationalesIncorrect: {
    B: "This is more suggestive of renal colic.",
    C: "This is not the classic description of duodenal ulcer pain."
  }
},

{
  question: "A patient with persistent epigastric pain unrelieved by antacids has a positive urea breath test. Which treatment is appropriate?",
  options: {
    A: "Amoxicillin, clarithromycin, and sucralfate",
    B: "Metronidazole, omeprazole, and clarithromycin",
    C: "Metronidazole and ranitidine only"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is positive urea breath test, which indicates Helicobacter pylori infection. Treatment requires combination therapy, usually antibiotics plus acid suppression. Omeprazole reduces gastric acid, while metronidazole and clarithromycin help eradicate the organism.",
  rationalesIncorrect: {
    A: "This lacks a proton pump inhibitor, which is important in eradication therapy.",
    C: "This is incomplete because it lacks adequate combination antibiotic therapy and stronger acid suppression."
  }
},

{
  question: "A patient with gastric ulcer is asked to describe the pain. Which response is most consistent with gastric ulcer?",
  options: {
    A: "“The pain feels better whenever I eat.”",
    B: "“The pain burns in my upper abdomen after eating.”",
    C: "“The pain comes in waves around my flank.”"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is gastric ulcer. Gastric ulcer pain is commonly felt in the epigastric area and may worsen shortly after meals because food stimulates gastric acid secretion and irritates the ulcer.",
  rationalesIncorrect: {
    A: "This is more typical of duodenal ulcer.",
    C: "This sounds more like renal colic."
  }
},

{
  question: "A patient with chronic iron deficiency anaemia has brittle, spoon-shaped nails. What is this nail change called?",
  options: {
    A: "Koilonychia",
    B: "Cheilosis",
    C: "Keloid"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is brittle spoon-shaped nails. This is called koilonychia and is classically associated with chronic iron deficiency anaemia.",
  rationalesIncorrect: {
    B: "Cheilosis refers to cracking or soreness at the corners of the mouth.",
    C: "A keloid is an overgrowth of scar tissue, not a nail change."
  }
},

{
  question: "A patient with liver cirrhosis becomes restless, forgetful, poorly concentrated, and develops a musty breath odour. Which medication is most appropriate?",
  options: {
    A: "Lactulose",
    B: "Diuretics",
    C: "Digoxin"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clues are poor concentration, mood changes, and musty breath. These suggest hepatic encephalopathy due to accumulation of ammonia and other toxins. Lactulose helps reduce ammonia absorption in the gut by promoting its excretion through stool.",
  rationalesIncorrect: {
    B: "Diuretics are used for ascites or oedema in cirrhosis, but they do not treat hepatic encephalopathy.",
    C: "Digoxin is used in selected heart conditions, not hepatic encephalopathy."
  }
},

{
  question: "A patient with nephrotic syndrome has oedema, heavy proteinuria, low serum albumin, and elevated lipid levels. The nurse explains that the hyperlipidaemia is mainly due to low:",
  options: {
    A: "Sodium",
    B: "Albumin",
    C: "Glucose"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is nephrotic syndrome. In nephrotic syndrome, large amounts of protein are lost in the urine, causing low albumin. The liver responds by producing more proteins and lipoproteins, leading to hyperlipidaemia.",
  rationalesIncorrect: {
    A: "Sodium affects fluid retention but does not directly explain hyperlipidaemia.",
    C: "Glucose is related to diabetes, not the main mechanism of hyperlipidaemia in nephrotic syndrome."
  }
},

{
  question: "A student nurse asks why patients with nephrotic syndrome often have increased lipid levels. The tutor explains that hyperlipidaemia occurs because of low:",
  options: {
    A: "Glucose",
    B: "Albumin",
    C: "Sodium"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key concept is the same: loss of albumin in urine causes hypoalbuminaemia. The liver tries to compensate by increasing protein synthesis, and this also increases lipoprotein production, resulting in hyperlipidaemia.",
  rationalesIncorrect: {
    A: "Low glucose does not cause nephrotic hyperlipidaemia.",
    C: "Sodium is linked with oedema and fluid retention, not lipid production."
  }
},

{
  question: "A patient with peptic ulcer disease says, “I often wake up around 1–3 a.m. with burning abdominal pain, and eating something relieves it.” Which type of ulcer is most likely?",
  options: {
    A: "Duodenal ulcer",
    B: "Gastric ulcer",
    C: "Jejunal ulcer"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is night pain relieved by food. Duodenal ulcer pain often occurs when the stomach is empty, including at night, and may improve after food or antacids.",
  rationalesIncorrect: {
    B: "Gastric ulcer pain usually worsens after meals.",
    C: "Jejunal ulcers are less common and are not the classic answer for night pain relieved by food."
  }
},

{
  question: "A patient is restless, agitated, twitching, and has convulsions. Laboratory results show serum sodium above 145 mEq/L. What electrolyte imbalance is present?",
  options: {
    A: "Hypernatraemia",
    B: "Hypokalaemia",
    C: "Hypercalcaemia"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is serum sodium greater than 145 mEq/L. This means hypernatraemia. High sodium causes water to move out of brain cells, leading to neurological symptoms such as restlessness, irritability, twitching, seizures, and confusion.",
  rationalesIncorrect: {
    B: "Low potassium mainly causes muscle weakness, cramps, ileus, and cardiac rhythm changes.",
    C: "High calcium may cause weakness, constipation, kidney stones, confusion, and cardiac changes, but the sodium level confirms hypernatraemia."
  }
},

{
  question: "A patient with right-sided heart failure develops abdominal distension and ascites. The nurse explains that this is mainly due to:",
  options: {
    A: "Decreased ejected ventricular volume",
    B: "Congestion in peripheral tissues and viscera",
    C: "Venous congestion of the lungs"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is right-sided heart failure with ascites. When the right side of the heart fails, blood backs up into the systemic venous circulation. This causes peripheral oedema, liver congestion, ascites, and distended neck veins.",
  rationalesIncorrect: {
    A: "This is more general and does not specifically explain ascites.",
    C: "Pulmonary congestion is more typical of left-sided heart failure."
  }
},

{
  question: "A patient with severe fluid volume deficit is being assessed. Which finding would the nurse not expect?",
  options: {
    A: "Acute weight loss",
    B: "Increased temperature",
    C: "Increased central venous pressure"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key phrase is severe fluid volume deficit. In dehydration or hypovolaemia, the circulating blood volume falls, so central venous pressure is usually decreased, not increased.",
  rationalesIncorrect: {
    A: "Rapid weight loss can occur due to fluid loss.",
    B: "Fever or raised temperature may occur due to dehydration and reduced sweating."
  }
},

{
  question: "A male patient with sickle cell disease is being discharged. The nurse teaches him about priapism. Which advice is appropriate? I. Empty the bladder at the onset of the attack II. Seek medical attention if it lasts beyond 3 hours III. Take a warm bath",
  options: {
    A: "I and III",
    B: "II and III",
    C: "I and II"
  },
  correctAnswer: "C",
  rationaleCorrect: "Priapism is a painful prolonged erection that can occur in sickle cell disease due to sickling and impaired blood flow. The patient should empty the bladder and seek urgent medical care if it persists, because prolonged priapism can damage erectile tissue.",
  rationalesIncorrect: {
    A: "Warm bath may be used in some comfort advice, but seeking medical attention if prolonged is more important.",
    B: "This misses emptying the bladder, which is a useful early step."
  }
},

{
  question: "A patient with suspected diabetes insipidus is undergoing a fluid deprivation test. Fluids are withheld while weight, blood pressure, pulse, and urine output are monitored. Which findings require immediate termination of the test? I. Excessive weight loss II. Hypertension III. Hypotension IV. Tachycardia",
  options: {
    A: "I, III and IV",
    B: "I, II and III",
    C: "I, II and IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key test is fluid deprivation. The danger is dehydration. Excessive weight loss, hypotension, and tachycardia indicate significant fluid loss and circulatory compromise, so the test must be stopped immediately.",
  rationalesIncorrect: {
    B: "Hypertension is not the expected danger sign during dehydration.",
    C: "This includes hypertension but excludes hypotension, which is a more serious warning sign."
  }
},

{
  question: "A patient is scheduled for thyroid function testing. The nurse reviews the medication history because some iodine-containing or interfering drugs can alter thyroid test results. Which drug groups should the nurse ask about? I. Opiates II. Anti-hypertensives III. Antibiotics IV. Corticosteroids",
  options: {
    A: "II, III and IV",
    B: "I, II and III",
    C: "I, II and IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key issue is medications that may interfere with thyroid testing. Some antihypertensives, antibiotics, and corticosteroids may affect thyroid function tests or iodine-related thyroid investigations depending on the specific drug. The nurse must therefore check the medication history carefully before the test.",
  rationalesIncorrect: {
    B: "This includes opiates but excludes corticosteroids, which may affect thyroid-related results.",
    C: "This includes opiates but excludes antibiotics, some of which may contain iodine or interfere with testing."
  }
},{
  question: "A young man was exposed to hepatitis A after eating food from a contaminated source. He is given gamma globulin at the clinic. The nurse explains that this provides passive immunity because it:",
  options: {
    A: "Provides ready-made antibodies that neutralize the antigen",
    B: "Speeds up antigen-antibody union in the liver",
    C: "Stimulates the body to produce short-lived antibodies"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is gamma globulin. Gamma globulin gives the patient ready-made antibodies. This is called passive immunity because the body does not produce the antibodies itself; they are given from an outside source.",
  rationalesIncorrect: {
    B: "This is not how passive immunity works. The main action is direct supply of antibodies.",
    C: "That describes active immunity, where the body is stimulated to produce its own antibodies."
  }
},

{
  question: "During an eye health teaching session, a trainee nurse asks about the major features of glaucoma. Which features should the nurse include? I. Increased intraocular pressure II. Optic nerve atrophy/damage III. Optic nerve hypertrophy IV. Peripheral visual field loss",
  options: {
    A: "I, II and IV",
    B: "I and III",
    C: "I, II and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key condition is glaucoma. Glaucoma is associated with raised intraocular pressure, damage or atrophy of the optic nerve, and gradual loss of peripheral vision. Patients may later develop tunnel vision.",
  rationalesIncorrect: {
    B: "Glaucoma causes optic nerve damage, not optic nerve hypertrophy.",
    C: "This includes optic nerve hypertrophy, which is incorrect."
  }
},

{
  question: "A severely anaemic patient receiving blood transfusion suddenly develops urticaria, restlessness, and convulsions. What should the nurse do first?",
  options: {
    A: "Administer emergency drugs",
    B: "Stop the transfusion immediately",
    C: "Notify the doctor immediately"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is sudden reaction during blood transfusion. The first action is to stop the transfusion immediately to prevent more incompatible or reactive blood from entering the patient’s circulation. After stopping it, the nurse maintains IV access with normal saline, assesses the patient, checks vital signs, and informs the doctor.",
  rationalesIncorrect: {
    A: "Emergency drugs may be needed, but the transfusion must first be stopped.",
    C: "The doctor must be informed, but the nurse should first stop the transfusion to prevent worsening of the reaction."
  }
},

{
  question: "A staff nurse is teaching student nurses about the position of the kidneys in relation to the vertebral column. Which answer shows correct understanding?",
  options: {
    A: "From the 12th thoracic vertebra to the 2nd lumbar vertebra",
    B: "From the 12th thoracic vertebra to the 3rd lumbar vertebra",
    C: "From the 12th thoracic vertebra to the 4th lumbar vertebra"
  },
  correctAnswer: "B",
  rationaleCorrect: "The kidneys lie retroperitoneally on the posterior abdominal wall, extending roughly from T12 to L3. The right kidney is usually slightly lower because of the liver.",
  rationalesIncorrect: {
    A: "This is too short and does not cover the usual lower extent.",
    C: "This is too low for the usual anatomical level of the kidneys."
  }
},

{
  question: "A patient with glaucoma is being prepared for discharge. The nurse evaluates whether the expected outcomes of care have been achieved. Which outcomes are appropriate? I. Complies with prescribed therapy II. Obtains relief from pain III. Has no further loss of vision IV. Functions safely within the environment",
  options: {
    A: "I, II and III",
    B: "I and II",
    C: "I, II, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key issue is overall glaucoma care. The patient must use prescribed eye medications correctly, have relief from pain or discomfort, prevent further vision loss, and learn safety measures to function well despite visual impairment.",
  rationalesIncorrect: {
    A: "This leaves out environmental safety, which is very important for a patient with visual field loss.",
    B: "This is incomplete because it ignores vision preservation and safety."
  }
},

{
  question: "A 15-year-old girl is brought to the dental clinic with bleeding gums, pain during brushing, and swelling around the teeth. The dentist diagnoses gingivitis. The nurse explains that gingivitis in teenagers may be related to:",
  options: {
    A: "Poor oral hygiene and vitamin C deficiency",
    B: "Hormonal changes and vitamin C deficiency",
    C: "Increased flossing and vitamin C deficiency"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is teenage age. During puberty, hormonal changes can make the gums more sensitive and prone to inflammation. Vitamin C deficiency may also contribute to bleeding and swollen gums.",
  rationalesIncorrect: {
    A: "Poor oral hygiene is a major cause of gingivitis generally, but the question is pointing specifically to the teenage period, where hormonal changes are important.",
    C: "Correct flossing helps prevent gingivitis. It does not usually cause it."
  }
},

{
  question: "A woman in a rural community is diagnosed with dracunculiasis. During health education, the nurse explains that the incubation period of Dracunculus medinensis is approximately:",
  options: {
    A: "6–9 months",
    B: "18–20 months",
    C: "10–14 months"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key condition is dracunculiasis, also known as Guinea worm disease. After a person drinks contaminated water containing infected water fleas, symptoms usually appear about 10–14 months later when the adult worm begins to emerge.",
  rationalesIncorrect: {
    A: "This is shorter than the usual incubation period.",
    B: "This is longer than the usual incubation period."
  }
},

{
  question: "A child is brought to the emergency unit with sudden noisy breathing, drooling, fever, and sitting forward in distress. The nurse hears acute inspiratory stridor. Which condition is most likely?",
  options: {
    A: "Pneumonia",
    B: "Epiglottitis",
    C: "Tension pneumothorax"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is acute inspiratory stridor, which suggests upper airway obstruction. Epiglottitis causes swelling of the epiglottis and can rapidly obstruct the airway. Drooling, fever, and sitting forward are danger signs.",
  rationalesIncorrect: {
    A: "Pneumonia usually causes cough, fever, crackles, and difficulty breathing, but not acute inspiratory stridor.",
    C: "This causes sudden respiratory distress, reduced breath sounds, tracheal deviation, and hypotension, not classic inspiratory stridor."
  }
},

{
  question: "An 18-month-old child is admitted with malnutrition. The mother says the child eats poorly and has lost weight. What should be the nurse’s initial action?",
  options: {
    A: "Teach the mother correct breastfeeding technique immediately",
    B: "Refer the mother and child to a dietician first",
    C: "Evaluate the child’s dietary intake"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key word is initial action. Before planning education or referral, the nurse must first assess what the child eats, how often the child eats, feeding practices, appetite, recent illness, and weight changes. Assessment comes before intervention.",
  rationalesIncorrect: {
    A: "This may be useful if breastfeeding is still relevant, but the nurse must first assess feeding history.",
    B: "Referral may be needed, but initial nursing care begins with assessment."
  }
},

{
  question: "An obese patient is admitted with oesophagitis. He complains of painful swallowing, heartburn, and poor appetite. Which nursing management plan is most appropriate?",
  options: {
    A: "Encourage rest after meals, promote oral care, and give prescribed medications",
    B: "Assess mucous membranes and vomitus only, then maximize prescribed medications",
    C: "Promote adequate nutrition, maintain mucosal integrity, and minimize pain"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key diagnosis is oesophagitis, which means inflammation of the oesophageal lining. Nursing care should focus on reducing pain, helping the patient eat safely, preventing further irritation of the mucosa, and promoting healing.",
  rationalesIncorrect: {
    A: "Resting flat after meals can worsen reflux and oesophageal irritation. Patients should remain upright after meals.",
    B: "Assessment is important, but this option is incomplete because it does not include nutrition, pain relief, or mucosal protection."
  }
},

{
  question: "A 16-year-old boy has a tooth extracted. Before discharge, the nurse teaches him to rinse with warm saline, brush twice daily, and floss after meals. What is the main rationale for these instructions?",
  options: {
    A: "To reduce pain and swelling after tooth extraction only",
    B: "To promote oral hygiene and prevent further cavities",
    C: "To prevent plaque and tartar build-up on the gums"
  },
  correctAnswer: "B",
  rationaleCorrect: "The instructions are mainly about maintaining oral hygiene. Brushing, flossing, and saline rinsing help keep the mouth clean, reduce bacterial growth, and prevent future dental caries and gum disease.",
  rationalesIncorrect: {
    A: "Warm saline may soothe the mouth, but brushing and flossing are broader oral hygiene measures.",
    C: "This is partly correct, but the wider rationale is oral hygiene and prevention of further cavities."
  }
},

{
  question: "A 10-year-old child is diagnosed with typhoid fever after eating food from an unsafe source. The nurse explains that typhoid fever is mainly transmitted through:",
  options: {
    A: "Airborne infection",
    B: "Faeco-oral infection",
    C: "Droplet infection"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is typhoid fever. Typhoid is caused by Salmonella typhi and is transmitted when a person consumes food or water contaminated with faeces from an infected person or carrier.",
  rationalesIncorrect: {
    A: "Airborne transmission occurs through tiny particles suspended in air, such as in tuberculosis.",
    C: "Droplet spread occurs through coughing or sneezing, not typhoid fever."
  }
},

{
  question: "An 18-year-old girl reports with burning mid-epigastric pain and gnawing hunger pain relieved by eating. She eats very little because she fears gaining weight and drinks mostly orange juice. What should be the main goal of management?",
  options: {
    A: "Maintain fluid and nutritional status only",
    B: "Relieve pain and maintain nutritional status",
    C: "Reduce burning sensation only and promote nutrition later"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clues are burning epigastric pain, gnawing pain relieved by food, and poor intake. The patient needs pain relief and nutritional support. If pain is not controlled, she may continue avoiding food, worsening her nutritional status.",
  rationalesIncorrect: {
    A: "This ignores pain, which is the patient’s major complaint.",
    C: "Nutrition should not be delayed because the patient is already eating poorly."
  }
},

{
  question: "An 18-year-old student reports with painful and difficult urination. Urinary tract infection is diagnosed. Which organism is the most common cause?",
  options: {
    A: "Enterococcus faecalis",
    B: "Staphylococcus aureus",
    C: "Escherichia coli"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key diagnosis is urinary tract infection. Escherichia coli is the most common cause of uncomplicated UTI because it normally lives in the bowel and can easily contaminate the urethral area, especially in females.",
  rationalesIncorrect: {
    A: "This can cause UTI, especially in hospital or catheter-associated cases, but it is not the most common overall.",
    B: "This is not a common cause of uncomplicated UTI."
  }
},

{
  question: "An 88-year-old man tells the nurse that he has recently developed impotence. What is the most appropriate nursing action?",
  options: {
    A: "Explain that impotence is normal at his age",
    B: "Listen and respond empathetically",
    C: "Take a complete health history, including medications"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key issue is new onset impotence. It should not be dismissed as normal ageing. The nurse should assess possible causes such as diabetes, hypertension, vascular disease, depression, alcohol use, and medications.",
  rationalesIncorrect: {
    A: "This is dismissive and may miss treatable causes.",
    B: "Empathy is important, but assessment is needed to identify the cause."
  }
},

{
  question: "An 88-year-old patient with benign paroxysmal positional vertigo is referred to physiotherapy. Which manoeuvres may be recommended? I. Epley manoeuvre II. Heimlich manoeuvre III. Semont manoeuvre IV. Valsalva manoeuvre",
  options: {
    A: "I and III",
    B: "I and II",
    C: "I and IV"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key condition is BPPV, which is caused by displaced calcium crystals in the inner ear. The Epley and Semont manoeuvres help reposition these crystals and reduce vertigo.",
  rationalesIncorrect: {
    B: "The Heimlich manoeuvre is used for choking, not vertigo.",
    C: "The Valsalva manoeuvre is not a standard treatment for BPPV."
  }
},

{
  question: "A patient is being taught about hormones that regulate body fluid balance. The nurse explains that antidiuretic hormone is released by the:",
  options: {
    A: "Posterior pituitary gland",
    B: "Anterior pituitary gland",
    C: "Adrenal cortex"
  },
  correctAnswer: "A",
  rationaleCorrect: "Antidiuretic hormone helps the kidneys conserve water. It is produced in the hypothalamus but stored and released by the posterior pituitary gland.",
  rationalesIncorrect: {
    B: "The anterior pituitary releases hormones such as TSH, ACTH, GH, FSH, LH, and prolactin.",
    C: "The adrenal cortex releases hormones such as cortisol, aldosterone, and androgens."
  }
},

{
  question: "An asthmatic patient is prescribed theophylline. The nurse explains that this drug helps the patient by:",
  options: {
    A: "Reducing constriction of the bronchioles",
    B: "Reducing irritation in the airway only",
    C: "Decreasing airway inflammation directly"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key drug is theophylline. Theophylline is a bronchodilator. It relaxes bronchial smooth muscle, helping to widen the airways and improve airflow.",
  rationalesIncorrect: {
    B: "This is not the main action of theophylline.",
    C: "Corticosteroids are used mainly to reduce airway inflammation. Theophylline mainly causes bronchodilation."
  }
},

{
  question: "An elderly patient complains of gum overgrowth. The nurse reviews his medications and suspects one of them as the cause. Which drug is most likely responsible?",
  options: {
    A: "Aspirin",
    B: "Phenytoin",
    C: "Digoxin"
  },
  correctAnswer: "B",
  rationaleCorrect: "The key clue is gingival hyperplasia, or gum overgrowth. Phenytoin, an anti-seizure medication, is a classic cause of gingival hyperplasia, especially when oral hygiene is poor.",
  rationalesIncorrect: {
    A: "Aspirin may increase bleeding tendency but does not commonly cause gum overgrowth.",
    C: "Digoxin can cause nausea, vomiting, visual disturbances, and arrhythmias when toxic, but not gingival hyperplasia."
  }
},

{
  question: "An ENT specialist teaches student nurses how to distinguish otitis externa from otitis media. The specialist explains that otitis externa pain is usually elicited by:",
  options: {
    A: "Pushing on the pinna",
    B: "Palpating the jaw",
    C: "Pulling on the pinna"
  },
  correctAnswer: "C",
  rationaleCorrect: "The key condition is otitis externa, an infection of the external ear canal. Pain is often worsened when the pinna is pulled or the tragus is pressed because the inflamed external ear canal is moved.",
  rationalesIncorrect: {
    A: "The more classic examination clue is pain on pulling the pinna or pressing the tragus.",
    B: "Jaw palpation may suggest temporomandibular joint problems, not otitis externa."
  }
},

{
  question: "During glaucoma assessment, a patient has optic disc cupping, coloured halos, tunnel vision, and visual field loss. Which finding, in addition to optic disc cupping, indicates optic nerve damage?",
  options: {
    A: "Visual field loss",
    B: "Tunnel vision only",
    C: "Coloured halos around lights"
  },
  correctAnswer: "A",
  rationaleCorrect: "The key clue is optic nerve damage. The optic nerve carries visual signals to the brain. When it is damaged in glaucoma, the patient develops visual field loss, especially peripheral field loss.",
  rationalesIncorrect: {
    B: "Tunnel vision is a late form of visual field loss, but the broader and more accurate answer is visual field loss.",
    C: "Halos are more related to corneal oedema and raised intraocular pressure, not direct evidence of optic nerve damage."
  }
};