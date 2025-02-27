import { StripIcon } from "@/assets/icons/stripIcon";
import colors from "@/constants/colors";
import { useAuth } from "@/src/context/AuthContext";
import { supabase } from "@/src/lib/supabase";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Profile() {

  const { setAuth } = useAuth()

  async function handleSignout() {
    const { error } = await supabase.auth.signOut()
    setAuth(null)
    if (error) {
      console.log(error)
      return;
    }
  }

  return (
    <View style={styles.container}>
      <StripIcon width={100} height={100} color={colors.green} />
      <Text>Pagina perfil</Text>
      <Button
        mode="contained"
        onPress={handleSignout}
      >
        Clique
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});