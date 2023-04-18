const btnSubmit = document.querySelector('.btn-submit');
const tblBody = document.querySelector('.table tbody');

const txtBenhNhan = document.querySelector('.benhNhan input');
const txtMatKhau = document.querySelector('.matKhau input');
const txtDate = document.querySelector('.ngayKham input');

const lblErrorBenhNhan = document.querySelector('.benhNhan p');
const lblErrorMatKhau = document.querySelector('.matKhau p');
const lblErrorDate = document.querySelector('.ngayKham p');

const chuyenKhoa = document.querySelector('.chuyenKhoa');

const checkboxList = document.querySelectorAll('.checkbox-item input');

const modal = document.getElementById('myModal');

const btnClose = document.querySelector('.btn-close');

let rowCounter = 1;

const regexCheck = () => {
  const regexMaBN = /^BN\-[0-9]{5}$/g;
  const regexMatKhau = /^\w{6,}$/g;
  let errorCount = 3;

  if (!regexMaBN.test(txtBenhNhan.value)) {
    lblErrorBenhNhan.textContent = '(*) BN-YYYYYY';
  } else {
    lblErrorBenhNhan.textContent = '';
    errorCount--;
  }

  if (!regexMatKhau.test(txtMatKhau.value)) {
    lblErrorMatKhau.textContent = '(*) Phải có từ 6 kí tự trở lên';
  } else {
    lblErrorMatKhau.textContent = '';
    errorCount--;
  }

  if (Date.parse(txtDate.value) < Date.now()) {
    lblErrorDate.textContent = '(*) Ngày khám phải sau ngày hiện tại';
  } else {
    lblErrorDate.textContent = '';
    errorCount--;
  }

  return errorCount === 0;
};

btnSubmit.addEventListener('click', () => {
  // Check Regex
  let countChkBox = 0;
  let error = regexCheck();

  checkboxList.forEach((chkbx) => {
    if (chkbx.checked) {
      countChkBox++;
    }
  });

  const dates = txtDate.value.split('-');
  const date = `${dates[2]}/${dates[1]}/${dates[0]}`;

  if (error) {
    rowCounter++;

    console.log(tblBody);

    const html = `
            <tr>
                <th scope="row">${rowCounter}</th>
                <td>${txtBenhNhan.value}</td>
                <td>${txtMatKhau.value}</td>
                <td>${date}</td>
                <td>${countChkBox * 500000}</td>
                <td>${chuyenKhoa.value}</td>
            </tr>

      `;

    tblBody.insertAdjacentHTML('beforeend', html);

    btnClose.click();
  } else {
    console.log('error');
  }
});

// Chặn hành động mặc định của form
document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
};
