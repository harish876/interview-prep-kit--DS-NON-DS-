(* OCaml Book Questions*)

(* Last element of a list*)
let rec last lst =
  match lst with
  | [] -> None
  | [ x ] -> Some x
  | _ :: t -> last t
;;

let () = assert (last [ 1; 2; 3; 4 ] = Some 4)
let () = assert (last [] = None)

(* Last 2 elements of a list*)
let rec last_two lst =
  match lst with
  | [] | [ _ ] -> None
  | [ x; y ] -> Some (x, y)
  | _ :: t -> last_two t
;;

let () = assert (last_two [ 1; 2; 3; 4 ] = Some (3, 4))
let () = assert (last_two [ 1 ] = None)

(*nth element of a list  - revisit later*)
let nth lst n = if n >= List.length lst || n < 0 then None else Some (List.nth lst n)
let () = assert (nth [ 1; 2; 3; 4 ] 0 = Some 1)
let () = assert (nth [ 1 ] 2 = None)

(* length of a list *)
let length lst =
  let rec aux lst len =
    match lst with
    | [] -> len
    | _ :: t -> aux t (len + 1)
  in
  aux lst 0
;;

let () = assert (length [ 1; 2; 3; 4 ] = 4)
let () = assert (length [] = 0)

(* Reverse a lst*)
let reverse lst =
  let rec aux lst acc =
    match lst with
    | [] -> acc
    | h :: t -> aux t (h :: acc)
  in
  aux lst []
;;

let () = assert (reverse [ 1; 2; 3; 4 ] = [ 4; 3; 2; 1 ])
let () = assert (reverse [] = [])

(* Palindrome *)
let is_pal lst = lst = List.rev lst
let () = assert (is_pal [ "a"; "b"; "a" ] = true)
let () = assert (is_pal [ "a"; "b" ] = false)

(* RLE *)
let encode lst =
  let rec aux count acc = function
    | [] -> []
    | [ x ] -> (count + 1, x) :: acc (* (count + 1,x) gets appended to the head of acc*)
    | a :: (b :: _ as t) ->
      if a = b then aux (count + 1) acc t else aux 0 ((count + 1, a) :: acc) t
  in
  List.rev (aux 0 [] lst)
;;

let () =
  let result =
    encode [ "a"; "a"; "a"; "a"; "b"; "c"; "c"; "a"; "a"; "d"; "e"; "e"; "e"; "e" ]
  in
  List.iter
    (fun (count, ch) ->
      print_int count;
      print_string ch;
      print_string " ")
    result;
  print_newline ()
;;

(* Factorial again but tail recursive*)
let factorial1 n =
  let rec aux n acc =
    match n with
    | 1 -> acc
    | _ -> aux (n - 1) (acc * n)
  in
  aux n 1
;;

let () = assert (factorial1 3 = 6)

(* Hackerrank functional programming exercies*)

let rec print_ntimes n =
  match n with
  | 0 -> ()
  | _ ->
    let () = print_endline "Hello World" in
    print_ntimes (n - 1)
;;

print_ntimes 0

(*let rec read_till_eof acc =
  try
  let line = read_line () in
  let number = int_of_string line in
  read_till_eof (number :: acc)
  with
  | End_of_file -> List.rev acc
  ;;
*)

(* read from the stdin *)
(*
   let start () =
   print_endline "Enter a Integer Value";
   let value = read_int () in
   let result = read_till_eof [] in
   let is_equal x = x != value in
   let filtered_result = List.filter is_equal result in
   List.iter (fun num -> Printf.printf "%d " num) filtered_result;
   print_newline ()
   ;;
*)

(*let filter_odd_positions () =
  let result = read_till_eof [] in
  result
  |> List.mapi (fun idx x -> idx, x)
  |> List.filter (fun (idx, _) -> idx mod 2 = 0)
  |> List.map snd
  |> List.iter (Printf.printf "%d")
  ;;*)

(*
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
*)

(*
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

   odd_sum () *)

(*let rec read_lines () =
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

  let () =
  let (n :: arr) = read_lines () in
  let ans = f n arr in
  List.iter
  (fun x ->
  print_int x;
  print_newline ())
  ans
  ;; *)
(*
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

   let () =
   let line = read_line () in
   let num_of_test_cases = int_of_string line in
   let test_cases = read_test_cases num_of_test_cases [] in
   let results = List.map (fun num -> find_exp 9 num 0.0) test_cases in
   List.rev results |> List.iter (fun value -> Printf.printf "%f\n" value)
   ;;
*)

let str_to_int_list str =
  let rec aux str idx acc =
    if idx < 0
    then acc
    else if int_of_char str.[idx] - int_of_char '0' >= 0
            && int_of_char str.[idx] - int_of_char '0' <= 9
    then aux str (idx - 1) ((int_of_char str.[idx] - int_of_char '0') :: acc)
    else aux str (idx - 1) acc
  in
  aux str (String.length str - 1) []
;;

let () =
  let line = read_line () in
  let values = str_to_int_list line in
  values |> List.iter (fun value -> Printf.printf "%d " value)
;;
