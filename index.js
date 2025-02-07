
let data;
let catagoriesDiv = document.querySelector('.catagories')
if (!localStorage.getItem('reload') || localStorage.getItem('reload') >= 5) {
    localStorage.setItem('reload',0)
}


async function fetchAndApplyData() {
    const url = "https://tourmaline-delirious-burglar.glitch.me/exams";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      data = await response.json();
      console.log(data);
      document.querySelector('.loading-screen').style = 'display:none;'
      localStorage.setItem('reload',0)
    } catch (error) {
      localStorage.setItem('reload', Number(localStorage.getItem('reload')) + 1)
      if (localStorage.getItem('reload') < 5) {
        console.error(error.message);
        location.reload()
      }  else {
        let url = new URL(window.location.href);
        url.pathname = '/error.html';
        let newUrl = url.toString();
        window.location.href = newUrl;
      }

    }
    putHTML()
}
function putHTML() {
    catagoriesDiv.innerHTML = `
        <div onclick="catagoryClicked('Biology')" class="biologyDiv catagoryDiv">
        <iconify-icon icon="material-symbols-light:microbiology" width="65" height="65"  style="color: white"></iconify-icon>
        <p>الاحياء</p>
        </div>

        <div onclick="catagoryClicked('Physics')" class="physicsDiv catagoryDiv">
        <iconify-icon icon="hugeicons:physics" width="65" height="65"  style="color: white"></iconify-icon>
        <p>الفيزياء</p>
        </div>

        <div onclick="catagoryClicked('Chemistry')" class="chemistryDiv catagoryDiv">
        <iconify-icon icon="healthicons:biochemistry-laboratory" width="65" height="65"  style="color: white"></iconify-icon>
        <p>الكيمياء</p>
        </div>

        <div onclick="catagoryClicked('English')" class="englishDiv catagoryDiv">
        <iconify-icon icon="icon-park-solid:english" width="65" height="65"  style="color: white"></iconify-icon>
        <p>اللغة الانجليزية</p>
        </div>

        <div onclick="catagoryClicked('French')" class="frenchDiv catagoryDiv">
        <iconify-icon icon="mdi:france" width="65" height="65"  style="color: white"></iconify-icon>
        <p>اللغة الفرنسية</p>
        </div>

        <div onclick="catagoryClicked('Islamic')" class="islamicDiv catagoryDiv">
        <iconify-icon icon="mdi:religion-islamic" width="65" height="65"  style="color: white"></iconify-icon>
        <p>التربية الاسلامية</p>
        </div>

        <div onclick="catagoryClicked('Literature')" class="literatureDiv catagoryDiv">
        <iconify-icon icon="game-icons:archive-research" width="65" height="65"  style="color: white"></iconify-icon>
        <p>ادب</p>
        </div>

        <div onclick="catagoryClicked('Grammar')" class="grammarDiv catagoryDiv">
        <iconify-icon icon="fluent:text-grammar-checkmark-24-regular" width="65" height="65"  style="color: white"></iconify-icon>
        <p>قواعد اللغة العربية</p>
        </div>

    `
}
fetchAndApplyData()


let sectionsObj = {
    "Biology": {
        "arabicSections": [
            "الأول - الخلية",  
            "الثاني - الأنسجة",  
            "الثالث - التكاثر",  
            "الرابع - التكوين الجنيني",  
            "الخامس - الوراثة"
        ],
        "englishSections": [
            "1 - The cell",  
            "2 - Tissues",  
            "3 - Reproduction",  
            "4 - Embryonic Development",  
            "5 - genetics"
        ]
    },
    "Physics": {
        "arabicSections": [
            "الأول - متسعات",  
            "الثاني - الحث الكهرومغناطيسي",  
            "الثالث - التيار المتناوب",  
            "الرابع - الموجات الكهرومغناطيسية",  
            "الخامس - البصريات الفيزيائية",  
            "السادس - الفيزياء الحديثة",  
            "السابع - الكترونيات الحالة الصلبة",  
            "الثامن - الاطياف الذرية والليزر",  
            "التاسع - الفيزياء النووية"
        ],
        "englishSections": [
            "1 - Capacitar",  
            "2 - Electromagnetic induction",  
            "3 - Alternating current",  
            "4 - Electromagnetic oscillation",  
            "5 - Optical physics",  
            "6 - Modern physics",  
            "7 - Solid state electronics",  
            "8 - ATOMIC SPECTRUM AND LASER",  
            "9 - Nuclear physics"  
        ]
    },
    "Chemistry": {
        "arabicSections": [
            "الأول - الثرموداينمك",  
            "الثاني - الاتزان الكيميائي",  
            "الثالث - الاتزان الايوني",  
            "الرابع - الكهربائية",  
            "الخامس - التناسقية",  
            "السادس - التحليلية",  
            "السابع - العضوية",  
            "الثامن - الكيمياء الحياتية"
        ],
        "englishSections": [
            "1 - Thermodynamics",  
            "2 - Chemical Equilibrium",  
            "3 - Ionic Equilibrium",  
            "4 - Electrochemistry",  
            "5 - Coordination Chemistry",  
            "6 - Chemical Analysis",  
            "7 - Organic Chemistry",  
            "8 - Biochemistry"  
        ]
    },
    "English": {
        "defaultSections": [
            "Unit 1",
            "Unit 2",
            "Unit 3",
            "Unit 4",
            "Unit 5",
            "Unit 6",
            "Unit 7",
            "Unit 8",
            "Literature",
        ]
    },
    "French": {
        "defaultSections": [
            "Prononciation",
             "le présent",
             "l'impératif",
             "l'imparfait",
             "le passé composé",         
            "le futur simple",
             "passé récent + futur proche + présent continu",
             "le plus-que-parfait",
            "le conditionnel présent",
             "le futur antérieur",
             "le conditionnel passé",
             "le subjonctif",
            "le gérondif",
             "جمل الشرط",
             "جمل التزامن",
             "Les pronoms d’objet",
             "les pronoms relatifs",
            "l'interrogation",
             "la négation",
             "سؤال الفراغات والاختيارات",
             "les prépositions",
            "Le féminin",
             "Les adverbes",
             "le pluriel",
             "أسئلة ومفردات الدرس الأول",
             "الدرس الثاني",
            "الدرس الثالث",
             "الدرس الرابع",
             "الدرس الخامس"
            ]
    },
    "Islamic": {
        "defaultSections": [
            "الوحدة الاولى",
            "الوحدة الثانية",
            "الوحدة الثالثة",
            "الوحدة الرابعة",
            "الوحدة الخامسة",
        ]
    },
    "Literature": {
        "defaultSections": ["الجزء الاول","الجزء الثاني"]
    },
    "Grammar": {
        "defaultSections": [
            "الاستفهام",  
            "النفي",  
            "التقديم والتأخير",  
            "التوكيد",  
            "النداء",  
            "المدح والذم",  
            "العرض والتحضيض",  
            "التمني والترجي",  
            "الإغراء والتحذير",  
            "التعجب"  
        ]
    },
}


function catagoryClicked(subject) {
    if (subject == 'Biology' || subject == 'Physics' || subject == 'Chemistry') {
        showLanguages(subject)
    } else {
        showGroups(subject)
    }
}

function showLanguages(subject) {
    catagoriesDiv.innerHTML = `
        <button class="homeBtn" onclick="putHTML()">
        <img src="media/images/icons/ic--baseline-home (1).png" alt="Home">
        </button>
        <div onclick="showGroups('${subject}', 'English')" class="catagoryDiv">منهج انجليزي</div>
        
        <div onclick="showGroups('${subject}', 'Arabic')" class="catagoryDiv">منهج عربي</div>
    `
}

function showGroups(subject, language) {
   /*  if (language) {
        catagoriesDiv.innerHTML = `
            <button class="homeBtn" onclick="putHTML()">
            <iconify-icon icon="mdi:home" width="34" height="34"  style="color: white"></iconify-icon>
            </button>
            <div onclick="showExams('${subject}', '2025','${language}')" class="catagoryDiv">دفعة 2025</div>
            <div onclick="showExams('${subject}', '2024','${language}')" class="catagoryDiv">دفعة 2024</div>
        `
    } else {
        catagoriesDiv.innerHTML = `
            <button class="homeBtn" onclick="putHTML()">
            <iconify-icon icon="mdi:home" width="34" height="34"  style="color: white"></iconify-icon>
            </button>
            <div onclick="showExams('${subject}', '2025')" class="catagoryDiv">دفعة 2025</div>
            <div onclick="showExams('${subject}', '2024')" class="catagoryDiv">دفعة 2024</div>
        `
    } */
    showExams(subject, '2025',language)
}

function showExams(subject, group, language, section) {
    console.log(subject, group, language, section)
    console.log(language != undefined ?  language.toLowerCase() + 'Sections' : 'defaultSections')
    let filterdExams = data.filter(exam => {
        if (subject == 'Biology' || subject == 'Physics' || subject == 'Chemistry') {
            return (exam['working'] == true && exam['catagory'] == subject && exam['language'] == language && exam['group'].indexOf(group) != -1)
        } else {
            console.log(subject + group)
            return (exam['working'] == true && exam['catagory'] == subject && exam['group'].indexOf(group) != -1)
        }
    })
    if (section) {
        console.log("there is section")
        filterdExams = filterdExams.filter(exam => {
            if (section != 'all' && section != "other") {
                return exam['section'] == section
            } else {
                if (section == 'all') {
                    return exam
                } else if (section == "other") {
                    return (exam['section'] == "other" || exam['section'] == undefined)
                }
            }
        })
    }
    console.log(filterdExams)
    let catagorySelectedSections = sectionsObj[subject][(language ?  language.toLowerCase() + 'Sections' : 'defaultSections')]
    let catagorySelectedSectionsHtml = `<option value='all'>كل الاختبارات</option>`
    for (let i in catagorySelectedSections) {
        catagorySelectedSectionsHtml += `
            <option ${(catagorySelectedSections[i] == section ? 'selected' : '')} value="${catagorySelectedSections[i]}">${catagorySelectedSections[i]}</option>
        `
    }

    catagoriesDiv.innerHTML = `
        <select onchange='showExams("${subject}","${group}",${language != undefined ? '"' + language + '"' : undefined}, this.value)' class="filterInput"> ${catagorySelectedSectionsHtml}
        <option ${("other" == section ? 'selected' : '')} value='other'>اخرى / اختبارات شاملة</option>
        </select>
        <button class="homeBtn" onclick="putHTML()">
        <img src="media/images/icons/ic--baseline-home (1).png" alt="Home">
        </button>
    `
    if (filterdExams.length > 0) {
        for (let i in filterdExams) {
            
            catagoriesDiv.innerHTML += `
                <div onclick="examClick('${filterdExams[i]['_id']}')" class="examDiv">
                    <p>
                        <iconify-icon icon="mdi:rename" width="25" height="25"  style="color: white"></iconify-icon>

                        ${filterdExams[i]['name']} 
                        </p>
                    <p>
                        <iconify-icon icon="carbon:time-filled" width="25" height="25"  style="color: white"></iconify-icon>

                        ${filterdExams[i]['timeInMinutes']} دقيقة 
                    </p> <p>
                        <iconify-icon icon="clarity:administrator-solid" width="25px" height="25px"  style="color: white"></iconify-icon>

                        ${filterdExams[i]['addedBy']} 
                    </p> 
                 </div>
            `
        }
    } else {
        catagoriesDiv.innerHTML = `
        <button class="homeBtn" onclick="putHTML()">
        <img src="media/images/icons/ic--baseline-home (1).png" alt="Home">
        </button>
        <p dir="rtl" class="no-exams">لايوجد اختبارات
        <br>
        للتقديم: <a href="https://t.me/Tohelp_sadsbot">@Tohelp_sadsbot</a>
        </p>
        `
        if (section) {
            catagoriesDiv.innerHTML += `        <select onchange='showExams("${subject}","${group}",${language != undefined ? '"' + language + '"' : undefined}, this.value)' class="filterInput"> ${catagorySelectedSectionsHtml}
        <option ${("other" == section ? 'selected' : '')} value='other'>اخرى / اختبارات شاملة</option>`
        }
    }
}

function examClick(examId) {
    console.log(data)
    let exam = data.filter(id => id['_id'] == examId)
    if (exam.length > 1) {
        console.error('error: more than exam with this id')
    } else {
        let url = new URL(window.location.href);
        url.pathname = '/examPage.html';
        url.searchParams.set('_id', examId);
        let newUrl = url.toString();
        window.location.href = newUrl;
    }
}
