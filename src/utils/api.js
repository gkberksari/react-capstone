// src/utils/api.js
// Sahte API fonksiyonları
const seededRandom = function (seed) {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  };
  
  export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
        result.push(i + ':00');
      }
      if(random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  }
  
  export function submitAPI(formData) {
    return true; // Sahte bir başarılı yanıt
  }