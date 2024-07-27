(* Hackerrak functional programming questions*)

(* String Compression *)

let compress lst =
  let rec aux lst count acc =
    match lst with
    | [] -> []
    | [ x ] -> (x, count + 1) :: acc
    | a :: (b :: _ as t) ->
      if a = b then aux t (count + 1) acc else aux t 0 ((a, count + 1) :: acc)
  in
  List.rev (aux lst 0 [])
;;

let make_string lst =
  let rec aux lst acc =
    match lst with
    | [] -> acc
    | h :: t ->
      (match h with
       | ch, 1 -> aux t (acc ^ Utils.char_to_string ch)
       | ch, freq -> aux t (acc ^ Utils.char_to_string ch ^ string_of_int freq))
  in
  aux lst ""
;;

let rec string_to_list str idx acc =
  if idx >= String.length str
  then List.rev acc
  else string_to_list str (idx + 1) (str.[idx] :: acc)
;;

let string_compression_runner () =
  let line = read_line () in
  let char_list = string_to_list line 0 [] in
  let encoding = compress char_list in
  let result = make_string encoding in
  Printf.printf "%s" result
;;

(* String Mingle*)

let string_mingle str1 str2 =
  let rec aux str1 str2 idx1 idx2 acc =
    if idx1 < String.length str1 && idx2 < String.length str2
    then
      aux
        str1
        str2
        (idx1 + 1)
        (idx2 + 1)
        (acc ^ Utils.char_to_string str1.[idx1] ^ Utils.char_to_string str2.[idx2])
    else acc
  in
  aux str1 str2 0 0 ""
;;

let string_mingle_runner () =
  let str1 = read_line () in
  let str2 = read_line () in
  Printf.printf "String1:%s String2:%s\n" str1 str2;
  let result = string_mingle str1 str2 in
  Printf.printf "Result - %s\n" result
;;

(*exponential sum*)

let rec read_test_cases n acc =
  match n with
  | 0 -> acc
  | _ ->
    let line = read_line () in
    let value = float_of_string line in
    read_test_cases (n - 1) (value :: acc)
;;

let factorial n =
  let rec aux n acc =
    match n with
    | 1 -> acc
    | _ -> aux (n - 1) (float_of_int n *. acc)
  in
  aux n 1.0
;;

let rec find_exp n x acc =
  match n with
  | 0 -> acc +. 1.0
  | curr -> find_exp (n - 1) x (acc +. ((x ** float_of_int curr) /. factorial curr))
;;

let find_exp_runner () =
  let line = read_line () in
  let num_of_test_cases = int_of_string line in
  let test_cases = read_test_cases num_of_test_cases [] in
  let results = List.map (fun num -> find_exp 9 num 0.0) test_cases in
  List.rev results |> List.iter (fun value -> Printf.printf "%f\n" value)
;;

(* gcd *)

let str_to_int_list str =
  let str_list = String.split_on_char ' ' str in
  List.map int_of_string str_list
;;

let rec gcd x y = if x = y then x else if x > y then gcd (x - y) y else gcd x (y - x)

let gcd_runner () =
  let line = read_line () in
  let values = str_to_int_list line in
  let hcf = gcd (List.nth values 0) (List.nth values 1) in
  Printf.printf "%d" hcf
;;

let rec print_ntimes n =
  match n with
  | 0 -> ()
  | _ ->
    let () = print_endline "Hello World" in
    print_ntimes (n - 1)
;;

let rec read_till_eof acc =
  try
    let line = read_line () in
    let number = int_of_string line in
    read_till_eof (number :: acc)
  with
  | End_of_file -> List.rev acc
;;

(* read from the stdin *)

let start () =
  print_endline "Enter a Integer Value";
  let value = read_int () in
  let result = read_till_eof [] in
  let is_equal x = x != value in
  let filtered_result = List.filter is_equal result in
  List.iter (fun num -> Printf.printf "%d " num) filtered_result;
  print_newline ()
;;

let filter_odd_positions () =
  let result = read_till_eof [] in
  result
  |> List.mapi (fun idx x -> idx, x)
  |> List.filter (fun (idx, _) -> idx mod 2 = 0)
  |> List.map snd
  |> List.iter (Printf.printf "%d")
;;

let rec reverse lst acc =
  match lst with
  | [] -> acc
  | h :: t -> reverse t (h :: acc)
;;

let reverse_lst () =
  let result = read_till_eof [] in
  let reversed_result = reverse result [] in
  List.iter (Printf.printf "%d\n") reversed_result
;;

let rec odd_sum_acc lst idx acc =
  if idx >= List.length lst
  then acc
  else if List.nth lst idx mod 2 <> 0
  then odd_sum_acc lst (idx + 1) (acc + List.nth lst idx)
  else odd_sum_acc lst (idx + 1) acc
;;

let odd_sum () =
  let result = read_till_eof [] in
  let odd_sum = odd_sum_acc result 0 0 in
  Printf.printf "%d" odd_sum
;;

let rec read_lines () =
  try
    let line = read_line () in
    int_of_string line :: read_lines ()
  with
  | End_of_file -> []
;;

let rec repeat num freq acc =
  match freq with
  | 0 -> acc
  | _ -> repeat num (freq - 1) (num :: acc)
;;

let f n arr =
  let result = List.map (fun value -> repeat value n []) arr in
  List.flatten result
;;

(*let flatten_runner () =
  let (n :: arr) = read_lines () in
  let ans = f n arr in
  List.iter
  (fun x ->
  print_int x;
  print_newline ())
  ans
  ;;
*)
