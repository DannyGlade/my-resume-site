import {
   ActionIcon,
   useMantineColorScheme,
   useComputedColorScheme,
   useMantineTheme,
   Group,
} from "@mantine/core";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "./ThemeToggle.module.css";

type ThemeToggleProps = {
   className?: string | string[];
};

export function ThemeToggle({ className }: ThemeToggleProps) {
   const { setColorScheme } = useMantineColorScheme();
   const computedColorScheme = useComputedColorScheme("dark", {
      getInitialValueInEffect: true,
   });
   const theme = useMantineTheme();

   return (
      <Group justify="center" className={[className].join(" ")}>
         <ActionIcon
            onClick={() =>
               setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
               )
            }
            variant="transparent"
            size="xl"
            aria-label="Toggle color scheme"
         >
            {computedColorScheme === "light" ? (
               <MdLightMode
                  className={[styles.icon, styles.light].join(" ")}
                  color={theme.colors.dark[7]}
               />
            ) : (
               <MdDarkMode
                  className={[styles.icon, styles.dark].join(" ")}
                  color={theme.colors.dark[0]}
               />
            )}
         </ActionIcon>
      </Group>
   );
}
