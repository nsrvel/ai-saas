import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export default function Page() {
    return (
        <SignUp
            appearance={{
                // baseTheme: dark,
                elements: {
                    formButtonPrimary: 'bg-violet-700 hover:bg-violet-800',
                },
                layout: {
                    socialButtonsPlacement: 'bottom',
                    socialButtonsVariant: 'auto',
                },
            }}
        />
    );
}
