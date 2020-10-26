import styles from "../../styles/Login.module.css";
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
export default function register() {
  const [name, setName] = useState(''); 
  const [lastName, setlastName] = useState(''); 
  const [age, setAge] = useState(''); 
  const [email, setEmail] = useState(''); 

  useEffect(() => {
    console.log('name--->', name);
    console.log("last name--->", lastName);
    console.log("age--->", age);
    console.log("email--->", email);
  }, [])
  const formFields = (type) =>{
    notification[type]({
      message: "Registro Exitoso!",
      description: `Bienvenido!  ${name}, ${lastName} tu email de registro es: ${email}`,
      duration: 10,
    });
  }
  return (
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
                Name
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
                Last Name
              </label>
              <UserOutlined className={styles.icon} />
              <Input
                className={styles.formImput}
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </FormItem>
            <FormItem name="age">
              <label for="age" className={styles.formLabel}>
                Age
              </label>
              <SolutionOutlined className={styles.icon} />
              <Input
                className={styles.formImput}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormItem>
            <FormItem name="email">
              <label for="email" className={styles.formLabel}>
                Email
              </label>
              <MailOutlined className={styles.icon} />
              <Input
                className={styles.formImput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
  );
}

