class User {
  constructor() {}

  validateUsername(username) {
    return username.includes("@") ? false : true;
  }

  validatePassword(password) {
    return password.length < 8 ? false : true;
  }

  async signUP(n, e, u, p, m, d) {
    let isValidated = this.validateUsername(u) && this.validatePassword(p);

    if (isValidated) {
      this.name = n;
      this.email = e;
      this.username = u;
      this.password = p;
      this.mobile = m;
      this.description = d;

      let register_api = "https://masai-api-mocker.herokuapp.com/auth/register";

      const response = await fetch(register_api, {
        method: "POST",
        body: JSON.stringify(this),

        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("data:", data);
    }
  }

  async Login(u, p) {
    const login_data = {
      username: u,
      password: p,
    };

    const login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;

    const response = await fetch(login_api, {
      method: "POST",
      body: JSON.stringify(login_data),

      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data:", data);
  }
}

let user = new User();

const Register = () => {
  const reg_form = document.getElementById("reg_form");

  const name = reg_form.name.value;
  const email = reg_form.email.value;
  const username = reg_form.username.value;
  const password = reg_form.password.value;
  const mobile = reg_form.mobile.value;
  const description = reg_form.description.value;

  user.signUP(name, email, username, password, mobile, description);
  console.log("user", user);

  // alert("Successfuly registerd");
};

const Login = () => {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  user.Login(username, password);
  console.log("user", user);

  user.signUP(name, email, username, password, mobile, description);

  if (username == username && password == password) {
    alert("Successfuly login");
  } else {
    alert(" not Successfuly login");
  }
};

// const getProfile = async (username, token) => {
//   let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`;
//   let response = await fetch(api_link, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   });

//   let data = await response.json();
//   console.log("data:", data);
// };
