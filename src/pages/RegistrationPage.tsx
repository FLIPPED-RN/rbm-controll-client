import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import RBMLogo from "../assets/rbm.png";
import { useNavigate } from "react-router";

export default function RegistrationPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <img src={RBMLogo} alt="RBM LOGO" className="size-60" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Регистрация в системе RBM</CardTitle>
          <CardDescription>
            Пожалуйста, введите свои учетные данные для регистрации в системе.
          </CardDescription>
          <CardAction>
            <Button variant={"outline"} onClick={() => navigate("/login")}>
              Войти
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
							<div className="grid gap-2">
                <Label htmlFor="first-name">Имя</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Иван"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Фамилия</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Иванов"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="login">Логин</Label>
                <Input
                  id="login"
                  type="text"
                  placeholder="user-user"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                </div>
                <Input id="confirm-password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="code-access">Код доступа</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Получить код доступа
                  </a>
                </div>
                <Input id="code-access" type="number" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full">Зарегистрироваться</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
