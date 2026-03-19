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

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center">
      <img src={RBMLogo} alt="RBM LOGO" className="size-60" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Вход в систему RBM</CardTitle>
          <CardDescription>
            Пожалуйста, введите свои учетные данные для входа в систему.
          </CardDescription>
          <CardAction>
            <Button variant={"outline"}>Регистрация</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
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
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Забыли пароль?
                  </a>
                </div>
                <Input id="password" type="password" required />
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
					<Button className="w-full">Войти</Button>
				</CardFooter>
      </Card>
    </div>
  );
}
