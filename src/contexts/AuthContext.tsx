import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface DataProfile {
    clientId: string | null;
    email: string | null;
    id: number | null;
    idRole: number | null;
    uuid: string | null;
}
interface AuthContextType {
    dataProfile: DataProfile | null;
    login: (dataProfile: DataProfile) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [dataProfile, setDataProfile] = useState<DataProfile | null>(() => {
        const storedDataProfile = localStorage.getItem("dataProfile");

        return storedDataProfile ? JSON.parse(storedDataProfile) : null;
    });

    useEffect(() => {
        if (dataProfile) {
            localStorage.setItem("dataProfile", JSON.stringify(dataProfile));
        } 
        else {
            localStorage.removeItem("dataProfile");
        }
    }, [dataProfile]);

    const login = (dataProfile : DataProfile) => setDataProfile(dataProfile);
    const logout = () => setDataProfile(null);

    return (
        <AuthContext.Provider value={{dataProfile, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
