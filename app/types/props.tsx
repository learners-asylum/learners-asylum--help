import { ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
}

export interface TitledWrapperProps extends WrapperProps {
  title: string;
}

export interface ErrorBoundaryProps {
  error: Error;
}
