// src/components/FetchUserButton.tsx
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading, setError } from '../store/slices/userSlice';
import { RootState } from '../store';

const FetchUserButton: React.FC = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.user);

    const fetchUserData = async () => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            // Replace with actual API call
            const user = { name: 'John Doe', email: 'john@example.com' };
            dispatch(setUser(user));
        } catch {
            dispatch(setError('Failed to fetch user data'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={fetchUserData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch User Data'}
            </Button>
            {error && <Typography color="error">{error}</Typography>}
        </div>
    );
};

export default FetchUserButton;
