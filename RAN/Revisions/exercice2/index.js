document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form1');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const values = {};

    formData.forEach((value, key) => {
      values[key] = value;
    });

    console.log(values);
  });
});

