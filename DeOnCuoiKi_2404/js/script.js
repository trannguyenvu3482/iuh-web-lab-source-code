const txtMa = document.querySelector('.txt-ma');
const errMa = document.querySelector('.errorMa');
const txtTen = document.querySelector('.txt-ten');
const txtNgay = document.querySelector('.txt-ngay');
const selectLoai = document.querySelector('.select-loai');
const btnNhapKho = document.querySelector('.btn-nhapkho');

const checkMaSP = (maSP) => {
  const regMa = /^(SP)\d{4}(NK|XK)$/;
  if (regMa.test(maSP)) {
    errMa.textContent = '*';
    txtMa.classList.remove('border-text');
    errMa.classList.remove('text-danger');
    return true;
  } else {
    errMa.textContent = 'Ma sai cu phap';
    errMa.classList.add('text-danger');
    txtMa.classList.add('border-text');
  }
};

txtMa.addEventListener('blur', () => {
  checkMaSP(txtMa.value);
});

btnNhapKho.addEventListener('click', () => {
  const maSP = txtMa.value;
  const tenSP = txtTen.value;
  const ngayNhap = txtNgay.value;
  const loaiSP = selectLoai.value;
  const thue = '10%';
  const thanhToan = document.querySelector('.rad-btns:checked').value;
  let loaiHangHoa = [];
  document
    .querySelectorAll('.chk-loaihanghoa:checked')
    .forEach((item) => loaiHangHoa.push(item.value));

  if (checkMaSP(maSP)) {
    const html = `
     <tr>
      <td>${maSP}</td>
      <td>${tenSP}</td>
      <td>${ngayNhap}</td>
      <td>${loaiSP}</td>
      <td>${loaiHangHoa.join(',')}</td>
      <td>${thanhToan}</td>
      <td>${thue}</td>
    </tr>
    
    `;

    document.querySelector('table tbody').insertAdjacentHTML('beforeend', html);

    document.querySelector('.btn-close').click();
  }
});
