import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export default function ChangePassword() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();
    const supabase = useSupabaseClient();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const { error } = await supabase.auth.updateUser({ password, options: { emailRedirectTo: 'http://localhost:3000/profile' }, });

    };

    if (error) {
        setError(error.message);
    }
    return (
        <div>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    New Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Change Password</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}


