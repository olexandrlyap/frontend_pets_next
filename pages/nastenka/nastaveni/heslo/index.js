import DashboardLayout from "../../../../components/layouts/DashboardLayout"
import SettingsNavigation from "../../../../components/dashboard/settings/SettingsNavigation"
import PasswordSettings from "../../../../components/dashboard/settings/PasswordSettings"

export default function index() {
  return (
    <DashboardLayout>
        <SettingsNavigation />
        <PasswordSettings />
    </DashboardLayout>
  )
}
