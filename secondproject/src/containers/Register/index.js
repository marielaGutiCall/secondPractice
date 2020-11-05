import styles from "../../../styles/Login.module.css";
import { Form, Input, Button, notification } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { useState, useEffect } from "react";
import {
  UserOutlined,
  MailOutlined,
  SolutionOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Select } from "antd";
import { Wrapper} from '../Wrapper'
import { useSelector, useDispatch } from "react-redux";
import { userActionSignUP  } from "../../redux/actions";

export  function Register() {
  // default
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cedulaIdentidad, setCedulaIdentidad] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  //const [pais, setPais] = setState("");

  const { Option } = Select;
  var optionS = "";

  function change(value) {
    console.log(`selected ${value}`);
    optionS = value;
  }

  useEffect(() => {
    console.log("name--->", name);
    console.log("last name--->", lastName);
    console.log("cedulaIdentidad--->", cedulaIdentidad);
    console.log("edad--->", edad);
    console.log("ciudad--->", ciudad);
    console.log("ciudad--->");
  }, []);

   /* Uso de UseSelector */
    const dataState = useSelector((state) => {
        console.log("state use selector ==>", state);
    });
  const dispatch = useDispatch();
  const formFields = (type) => {
    notification[type]({
      message: "Registro Exitoso!",
      description: `Bienvenido!  ${name}, ${lastName} 
                    tu cedula de identitad es: ${cedulaIdentidad}
                    tu edad es: ${edad}
                    Vives en  la ciudad ${ciudad}`, //${name}
      duration: 10,
    });
    /* Uso useDispatch */
    const value = {
      name: name,
      lastName: lastName,
      cedulaIdentidad: cedulaIdentidad,
      edad: edad,
      ciudad: ciudad,
    };
    dispatch(userActionSignUP(value));
  };
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.containerLogin}>
          <div className={styles.loginImage}>
            <img src="/img/signup-image.jpg" alt="my image" />
          </div>
          <div className={styles.loginContenedor}>
            <span className={styles.subtitleContenedor}>Register User</span>
            <Form className={styles.loginForm} name="basic">
              <FormItem name="name">
                <label for="name" className={styles.formLabel}>
                  Nombre
                </label>
                <UserOutlined className={styles.icon} />
                <Input
                  value={name}
                  className={styles.formImput}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormItem>
              <FormItem name="lastName">
                <label for="lastName" className={styles.formLabel}>
                  Apellido
                </label>
                <UserOutlined className={styles.icon} />
                <Input
                  className={styles.formImput}
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </FormItem>
              <FormItem name="cedulaIdentidad">
                <label for="cedulaIdentidad" className={styles.formLabel}>
                  Cedula de Identidad
                </label>
                <SolutionOutlined className={styles.icon} />
                <Input
                  className={styles.formImput}
                  value={cedulaIdentidad}
                  onChange={(e) => setCedulaIdentidad(e.target.value)}
                />
              </FormItem>
              <FormItem name="edad">
                <label for="edad" className={styles.formLabel}>
                  Edad
                </label>
                <MailOutlined className={styles.icon} />
                <Input
                  className={styles.formImput}
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
              </FormItem>
              <FormItem name="pais">
                <label for="edad" className={styles.formLabel}>
                  Pais
                </label>
                <Select
                  defaultValue="Bolivia"
                  style={{ width: 120 }}
                  //value={pais}
                  onChange={change}
                >
                  <Option value="bolivia">Bolivia</Option>
                  <Option value="venezuela">Venezuela</Option>
                  <Option value="peru">Peru</Option>
                  <Option value="colombia">Colombia</Option>
                </Select>
              </FormItem>
              <FormItem name="ciudad">
                <label for="ciudad" className={styles.formLabel}>
                  Ciudad
                </label>
                <MailOutlined className={styles.icon} />
                <Input
                  className={styles.formImput}
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </FormItem>
              <FormItem>
                <Button
                  className={styles.formButton}
                  type="default"
                  htmlType="submit"
                  onClick={() => formFields("success")}
                >
                  Register
                </Button>
              </FormItem>
            </Form>
            <div className={styles.textRegister}>
              <Link href="/login">
                <a>
                  <ArrowLeftOutlined className={styles.iconLogin} />
                  <span>Sing In</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
