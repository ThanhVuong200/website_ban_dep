function validateform() {
    var name = document.forms["Form"]["firstname"].value;
    var name1 = document.forms["Form"]["name"].value;
    var email = document.forms["Form"]["email"].value;
    var password = document.forms["Form"]["password"].value;
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var format1 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var format_email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (name != "") {
        if (format.test(name)) {
            alert("Tên đăng nhập không được chứa kí tự đặc biệt");
            return false;
        } else if (name.length < 3) {
            alert("Tên đăng nhập phải lớn hơn 3 kí tự");
            return false;
        }
    }
    if (name == "") {
        alert("Tên không được để trống");
        return false;
    }
    if (name1 != "") {
        if (format1.test(name1)) {
            alert("Họ tên khách hàng không được chứa kí tự đặc biệt");
            return false;
        } else if (name1.length < 3) {
            alert("Họ tên khách hàng phải lớn hơn 3 kí tự");
            return false;
        }
    }
    if (name1 == "") {
        alert("Họ tên khách hàng không được để trống");
        return false;
    }
    if (email != "") {
        if (format_email.test(email) == false) {
            alert("email không đúng định dạng");
            return false;
        }
    }
    if (email == "") {
        alert("Email không được để trống");
        return false;
    }
    if (password == "") {
        alert("Mật khẩu không được để trống");
        return false;
    }
    if (password != "") {
        if (password.length < 4) {
            alert("Mật khẩu phải từ 5 kí tự");
            return false;
        }
    }
}

function validate() {
    var name = document.forms["Forms"]["loginname"].value;
    var loginpassword = document.forms["Forms"]["loginpassword"].value;
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (name != "") {
        if (format.test(name)) {
            alert("Tên đăng nhập không được chứa kí tự đặc biệt");
            return false;
        }
    }
    if (name == "") {
        alert("Tên đăng nhập không được để trống");
        return false;
    }

    if (loginpassword == "") {
        alert("Mật khẩu không được để trống");
        return false;
    }
}


function validateAdress() {
    var firstname = document.forms["Formaddress"]["firstname"].value;
    var phone = document.forms["Formaddress"]["phone"].value;
    var address1 = document.forms["Formaddress"]["address1"].value;
    var deli_address = document.forms["Formaddress"]["deli-address"].value;

    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (address1 == "") {
        alert("Vui lòng chọn địa chỉ giao hàng");
        return false;
    }
    if (deli_address == "") {
        alert("Vui lòng chọn địa chỉ giao hàng");
        return false;
    }
    if (firstname == "") {
        alert("Tên người nhận không được để trống");
        return false;
    }
    if (firstname != "") {
        if (firstname.length < 3) {
            alert("Tên người nhận không được quá ngắn");
            return false;
        } else if (format.test(firstname)) {
            alert("Tên người nhận được chứa kí tự đặc biệt");
            return false;
        }
    }
    if (phone == "") {
        alert("Số điện thoại không được để trống");
        return false;
    }
}