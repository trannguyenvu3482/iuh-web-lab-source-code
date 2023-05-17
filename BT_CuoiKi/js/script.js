const txtMaThe = document.querySelector('.txt-mathe');
const txtHoTen = document.querySelector('.txt-hoten');
const txtTuoi = document.querySelector('.txt-tuoi');
const txtSDT = document.querySelector('.txt-sdt');
const txtDiaChi = document.querySelector('.txt-diachi');
const txtTiLe = document.querySelector('.txt-tile');
const chkboxes = document.querySelectorAll('input[name="chkbox"]');
const selectDT = document.querySelector('.select-dt');
const radBtns = document.querySelectorAll('input[name="noitru-ngoaitru"]')

const errMaThe = document.querySelector('.err-mathe');
const errHoTen = document.querySelector('.err-hoten');
const errTuoi = document.querySelector('.err-tuoi');
const errSDT = document.querySelector('.err-sdt');
const errDiaChi = document.querySelector('.err-diachi');
const errTiLe = document.querySelector('.err-tile');

const btnDangKy = document.querySelector('.btn-dangky');
const btnClose = document.querySelector('.close');

const tableBody = document.querySelector('table tbody');
const tongSo = document.querySelector('.tongso > span');
let stt = 0;

const checkTiLe = () => {
    const value = selectDT.value;

    if (value == 1) {
        return '40%';
    } else if (value == 2) {
        return '50%';
    } else if (value == 3) {
        return '30%';
    }
}

const checkInputs = () => {
    const regexMaThe = /^(QN|CB|CD)\-\d{4}$/;
    const regexHoTen = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)+$/
    const regexTuoi = /^\d+$/
    const regexSDT = /^(09|03|08|07)\d{8}$/
    let checkError = true;

    if (!regexMaThe.test(txtMaThe.value)) {
        errMaThe.textContent = 'Mã thẻ bảo hiểm phải có định dạng QN-XXXX hoặc CB-XXXX hoặc CD-XXXX, với X là ký tự số'
        checkError = false;
    } else {
        errMaThe.textContent = ''
    }

    if (!regexHoTen.test(txtHoTen.value)) {
        errHoTen.textContent = 'Họ tên phải đảm bảo ít nhất có Họ, Tên. Ký tự đầu tiên phải viết hoa'
        checkError = false;
    } else {
        errHoTen.textContent = ''
    }

    if (!regexTuoi.test(txtTuoi.value) || (txtTuoi.value <= 16)) {
        errTuoi.textContent = 'Tuổi phải trên 16'
        checkError = false;
    } else {
        errTuoi.textContent = ''
    }
    
    if (!regexSDT.test(txtSDT.value)) {
        errSDT.textContent = 'Số điện thoại phải có 10 con số, trong đó luôn bắt đầu bằng 09, 03, 08 hoặc 07'
        checkError = false;
    } else {
        errSDT.textContent = ''
    }

    if (txtDiaChi.value === '' || txtDiaChi.value === null) {
        errDiaChi.textContent = 'Đây là trường bắt buộc nhập'
        checkError = false;
    } else {
        errDiaChi.textContent = ''
    }

    return checkError;
}

btnDangKy.addEventListener('click', () => {
   if (checkInputs()) {
    stt++;
    let dichvu = '';
    let hinhthuc = '';

    chkboxes.forEach((item) => {
        if (item.checked) {
            dichvu += `${item.value}, `;
        }
    })

    radBtns.forEach((item) => {
        if (item.checked) {
            hinhthuc = item.value;
        }
    })


    const html = `
    <tr>
        <td scope="row">${stt}</td>
        <td>${hinhthuc}</td>
        <td>${txtMaThe.value}</td>
        <td>${txtHoTen.value}</td>
        <td>${txtTuoi.value}</td>
        <td>${txtSDT.value}</td>
        <td>${txtDiaChi.value}</td>
        <td>${dichvu}</td>
        <td>${checkTiLe()}</td>
    </tr>
    `

    tableBody.insertAdjacentHTML('beforeend', html);
    tongSo.textContent = stt;
    btnClose.click();
   }
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
})

selectDT.addEventListener('change', (e) => {
    const percent = checkTiLe();
    txtTiLe.value = percent;
})