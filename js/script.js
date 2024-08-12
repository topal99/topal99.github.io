// Menghitung BMI
function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}

// Menentukan kategori berat badan
function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Kelebihan berat badan';
    } else if (bmi >= 30) {
        return 'Kegemukan (Obesitas)';
    }
}

// Menampilkan status BMI
function statusBMI(bmi) {
    if (bmi < 18.5) {
            return 'yang kurang';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'normal (ideal)';
        } else if (bmi >= 25 && bmi <= 29.9) {
            return 'berlebih';
        } else if (bmi >= 30) {
            return 'gemuk (Obesitas)';
        }
}

// Mengambil input gender
function genderBMI(gender, usia) {
        return Array (gender, usia);
}


// Menampilkan hasil BMI
function calculateAndDisplayBMI() {
    const weight = parseFloat(document.getElementById('weight').value); // Mengambil input berat badan
    const heightCm = parseFloat(document.getElementById('heightCm').value); // Mengambil input tinggi badan
    const heightM = heightCm / 100; // Konversi cm ke meter
    const bmi = calculateBMI(weight, heightM); // Menghitung BMI
    const result = interpretBMI(bmi); // Menentukan kategori berat badan
    const gender = document.querySelector('input[name="gender"]:checked').value; // Mengambil input gender
    const resultStatus = statusBMI(bmi); // Menampilkan status BMI
    const usia = document.getElementById('usia').value; // Mengambil input usia

    document.getElementById('result1').textContent = result; // Menampilkan hasil kategori berat badan
    document.getElementById('result2').textContent = bmi.toFixed(2); // Menampilkan hasil BMI
    document.getElementById('result3').textContent = "Anda seorang " + gender + " berusia " + usia + " tahun yang memiliki berat badan " + resultStatus; // Menampilkan status BMI
}

// Mengosongkan input berat badan, usia, tinggi badan, dan hasil BMI
function resetForm() {
    document.getElementById('weight').value = ''; // Mengosongkan input berat badan
    document.getElementById('usia').value = ''; // Mengosongkan input usia
    document.getElementById('heightCm').value = ''; // Mengosongkan input tinggi badan
    document.getElementById('result').textContent = ''; // Mengosongkan input hasil BMI

}
