export default async function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-18">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Take Control of Your{" "}
                    <span className="text-primary">Finances</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our budget tracking app helps you effortlessly manage your
                    expenses, create budgets, and gain insights into your
                    spending habits.
                  </p>
                </div>
              </div>
              <img
                src="/heroImage.jpg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 lg:py-18">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Manage Your Finances with Ease
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our budget tracking app offers a comprehensive set of tools to
                  help you take control of your finances.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Expense Tracking</h3>
                      <p className="text-muted-foreground">
                        Easily log and categorize your expenses to gain
                        visibility into your spending.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Budgeting</h3>
                      <p className="text-muted-foreground">
                        Create customized budgets and track your progress
                        towards your financial goals.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Reporting</h3>
                      <p className="text-muted-foreground">
                        Generate detailed reports and insights to understand
                        your spending patterns.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/heroImage2.jpg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
