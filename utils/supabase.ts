// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "<https://dffmfotlrozrhjrrbxou.supabase.co>";
// const supabaseKey =
//   "<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDkzNTcyMSwiZXhwIjoxOTUwNTExNzIxfQ.jwMAkLzubhyX4btDdw9Lt2u8ypOpWZ2ObtI_S8-NgGM>";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dffmfotlrozrhjrrbxou.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDkzNTcyMSwiZXhwIjoxOTUwNTExNzIxfQ.jwMAkLzubhyX4btDdw9Lt2u8ypOpWZ2ObtI_S8-NgGM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
