import { useRouter } from "next/router";

export default function PortalDefault() {

    const router = useRouter();
    router.replace("/portal/login");

    return <></>;

}