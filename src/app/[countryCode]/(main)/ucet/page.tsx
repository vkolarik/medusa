"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import * as ROUTES from "@constants/routes"
import { Loading } from '@components/Loading';

const AccountPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.PERSONAL_INFO);
  }, [router]);

  return <Loading />;
};

export default AccountPage;
