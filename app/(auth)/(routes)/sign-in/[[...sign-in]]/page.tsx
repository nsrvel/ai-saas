import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <SignIn
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
