import styles from "../../../styles/Login.module.css";
import { Form, Input, Button, notification } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { useState, useEffect } from "react";
import { Wrapper} from '../Wrapper';
import { useSelector, useDispatch} from 'react-redux';

import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { userActionSignIn } from '../../redux/actions'

export  function Login() {
  /* Uso de UseSelector */
  const dataState = useSelector((state) => {
    console.log("state use selector ==>", state);
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const [formule] = Form.useForm();

  const submit = (value) => {
    let data = "";

    value.societyId = "fafc7359-0139-43d7-9d00-1828d90cc407";
    const URL = "https://dbcolegios.blockchainconsultora.com/users/login";
    const obj = {
      method: "POST",
      body: JSON.stringify({
        ...value,
      }), //"admin@test.com", "Test1235",

      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(URL, obj)
      .then((res) => res.json())
      .then((response) => {
        data = response;
        console.log("success:", response);
        console.log("data:", data);
        router.push("/home");
        notification["success"]({
          message: "Inicio de Sesión Exitoso",
          description: "Token!" + response.token,
          duration: 10,
        });
      })
      .catch((error) => console.error("Error:", error));

    /* Uso useDispatch */
    dispatch(userActionSignIn(value));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Falla:", errorInfo);
  };

  return (
    <Wrapper atLogin>
      <div className={styles.container}>
        <div className={styles.containerLogin}>
          <div className={styles.loginImage}>
            <img src="/img/img-01.png" alt="my image" />
          </div>
          <div className={styles.loginContenedor}>
            <span className={styles.subtitleContenedor}>Login User</span>
            <Form
              className={styles.loginForm}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={submit}
              onFinishFailed={onFinishFailed}
              form={formule}
              name="control-hooks"
            >
              <div className={styles.containerImput}>
                <label for="email" className={styles.formLabel}>
                  Email
                </label>
                <UserOutlined className={styles.icon} />
                <Form.Item name="email">
                  <Input className={styles.formImput} />
                </Form.Item>
              </div>
              <div className={styles.containerImput}>
                <label for="password" className={styles.formLabel}>
                  Password
                </label>
                <LockOutlined className={styles.icon} />
                <Form.Item name="password">
                  <Input className={styles.formImput} />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  className={styles.formButton}
                  type="default"
                  htmlType="submit"
                  block
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div>
              <Link href="/register">
                <a className={styles.textRegister}>
                  <span>Create your Account</span>
                  <ArrowRightOutlined className={styles.iconRegister} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
