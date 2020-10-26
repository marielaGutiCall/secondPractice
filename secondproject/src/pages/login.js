import styles from "../../styles/Login.module.css";
import { Form, Input, Button, notification } from "antd";
import FormItem from 'antd/lib/form/FormItem';
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from 'next/link';
import {useRouter} from 'next/router';


export default function login() {
  const router = useRouter();
  const openNotificationWithIcon = (type) => {
    router.push('/home')
    notification[type]({
      message: "Inicio de Sesión Exitoso",
      description: "Bienvenido!",
      duration:10,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <div className={styles.loginImage}>
          <img src="/img/img-01.png" alt="my image" />
        </div>
        <div className={styles.loginContenedor}>
          <span className={styles.subtitleContenedor}>Login User</span>
          <Form className={styles.loginForm} name="basic">
            <FormItem name="username">
              <label for="username" className={styles.formLabel}>
                Username
              </label>
              <UserOutlined className={styles.icon} />
              <Input className={styles.formImput} />
            </FormItem>
            <FormItem name="password">
              <label for="password" className={styles.formLabel}>
                Password
              </label>
              <LockOutlined className={styles.icon} />
              <Input className={styles.formImput} />
            </FormItem>
            <FormItem>
              <Button
                className={styles.formButton}
                type="default"
                htmlType="submit"
                onClick={() => openNotificationWithIcon("success")}
              >
                Submit
              </Button>
            </FormItem>
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
  );
}
