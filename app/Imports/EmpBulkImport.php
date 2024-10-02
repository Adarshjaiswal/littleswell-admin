<?php

// namespace App\Imports;

// use Illuminate\Support\Collection;
// use Maatwebsite\Excel\Concerns\ToCollection;
// use Maatwebsite\Excel\Concerns\ToModel;

// use Maatwebsite\Excel\Concerns\WithBatchInserts;
// use Maatwebsite\Excel\Concerns\WithChunkReading;
// use Maatwebsite\Excel\Concerns\WithUpserts;
// use App\Models\AppUser;
// use App\Models\Employee;
// use App\Models\AadharVerification;

// class EmpBulkImport implements ToModel
// {
//     /**
//     * @param Collection $collection
//     */
//     public function batchSize(): int
//     {
//         return 20;
//     }
    
//     public function chunkSize(): int
//     {
//         return 20;
//     }
//     public function model(array $row)
//     {
//         //
//         $rows = $rows->skip(1);
//         // foreach ($rows as $row) {
//         //     // Assuming the first column contains the name, second contains email, and third contains phone
//         //     $emp_name = $row['Empfname'] ?? null;
//         //     $emp_father_name = $row['EmpFatherName'] ?? null;
//         //     $emp_mother_name = $row['emp_mother_name'] ?? null;
//         //     $emp_department = $row['emp_department'] ?? null;
//         //     $sex = $row['EmpSex'] ?? null;
//         //     $client_id = $row['client_id'] ?? null;
//         //     $emp_branch = $row['emp_branch'] ?? null;
//         //     $emp_division = $row['emp_division'] ?? null;
//         //     $emp_type = $row['emp_type'] ?? null;
//         //     $marital_status = $row['EmpMaritalStatus'] ?? null;
//         //     $designation = $row['EmpDesgn'] ?? null;
//         //     $doj = $row['EmpDtofJoining'] ?? null;
//         //     $uan = $row['EmpUANNumber'] ?? null;
//         //     $pancard_number = $row['PanCardNo'] ?? null;
//         //     $bank_name = $row['Bankname'] ?? null;
//         //     $ifsc = $row['EmpIFSCcode'] ?? null;
//         //     $old_empid = $row['oldempid'] ?? null;
//         //     $bank_ac_no = $row['EmpBankAcNo'] ?? null;
//         //     $emp_pf_applicable = $row['EmpPFDeduct'] ?? null;
//         //     $emp_pt_applicable = $row['EmpPTDeduct'] ?? null;
//         //     $emp_esi_applicable = $row['EmpESIDeduct'] ?? null;
//         //     $emp_pf_no = $row['EmpEpfNo'] ?? null;
//         //     $emp_esi_number = $row['EmpESINo'] ?? null;
//         //     $emp_present_address = $row['EmppresentAddress'] ?? null;
//         //     $EmpPermanentAddress = $row['EmpPermanentAddress'] ?? null;
//         //     if($row['EmpDtofLeaving'] == 'NA'){
//         //         $is_job_ended = 0;
//         //         $end_date = 'Present';
//         //     }else{
//         //         $is_job_ended = 1;
//         //         $end_date = $row['EmpDtofLeaving'];
//         //     }
//         //     $emp_id = $row['EmpId'] ?? null;
//         //     $is_imported_employee = 1;
            

            

//         //     // You can perform validation or additional processing here
//         //     // if (empty($name) || empty($phone)) {
//         //     //     throw new \Exception('Name and phone cannot be empty.');
//         //     // }
//         //     // Create or update the customer in the database
//         //     // Employee::updateOrCreate(
//         //     //     ['emp_id' => $emp_id],
//         //     //     [
//         //     //         'name' => $name,
//         //     //         'phone' => $phone,
//         //     //         'created_by' => $this->businessId,
//         //     //     ]
//         //     // );
//         // }
//         foreach ($rows as $row) {
            
//             $EmpId = $row[0] ?? "";
//             $Empfname = $row[1] ?? "";
//             $EmpDesgn = $row[2] ?? "";
//             $EmpSex = $row[3] ?? "";
//             $EmpMaritalStatus = $row[4] ?? "";
//             $EmpPhone = $row[5] ?? "";
//             $EmpFatherName = $row[6] ?? "";
//             $EmpDtofJoining = $row[7] ?? "";
//             $EmpDtofBirth = $row[8] ?? "";
//             $EmpUANNumber = $row[9] ?? "";
//             $AadharCardNo = $row[10] ?? "";
//             $PanCardNo = $row[11] ?? "";

//             $Bankname = $row[12] ?? "";
//             $EmpIFSCcode = $row[13] ?? "";
//             $oldempid = $row[14] ?? "";
//             $EmpSex = $row[15] ?? "";
//             $EmpBankAcNo = $row[16] ?? "";
//             $EmpPFDeduct = $row[17] ?? "";
//             $EmpPTDeduct = $row[18] ?? "";
//             $EmpESIDeduct = $row[19] ?? "";
//             $EmpEpfNo = $row[20] ?? "";
//             $EmpESINo = $row[21] ?? "";
//             $EmpPermanentAddress = $row[22] ?? "";
//             $EmppresentAddress = $row[23] ?? "";

//             $UnitIDName = $row[24] ?? "";
//             $ServiceNo = $row[25] ?? "";
//             $Rank = $row[26] ?? "";
//             $EmpDtofLeaving = $row[27] ?? "";
//             $Empstatus = $row[28] ?? "";
//             $Online = $row[29] ?? "";
//             $PSARA = $row[30] ?? "";
     
             
//                 // Create or find the user by phone number
//                 $user = AppUser::updateOrCreate(
//                     ['phone_number' => $EmpPhone],
//                     [
//                         'name' => $Empfname,
//                        'dob' => $EmpDtofBirth,
//                         'payment_status' => 1,
//                         'is_phone_verified' => 1                        
//                     ]
//                 );
//                 // Check if an AadharVerification record exists for the user
//                $aadharVerification = AadharVerification::where('user_id', $user->id)->first();
//                  if (!$aadharVerification) {
//                      // Create a new AadharVerification instance and set values
//                      $aadharVerification = new AadharVerification();
//                      $aadharVerification->user_id = $user->id;
//                  }
//               // Update or set AadharVerification values
//               $aadharVerification->aadhar_number = $AadharCardNo;
 
//               // Save the AadharVerification record
//               $aadharVerification->save();
                
//                 $employee = Employee::where('user_id', $user->id)->first();
 
//                 if (!$employee) 
//             {
                  
//                 // Create a new Employee instance and set values
//                 $employee = new Employee();
//                 $employee->user_id = $user->id;
//                 $employee->emp_name = $Empfname;
//                 $employee->emp_father_name = $EmpFatherName;
//                 $employee->emp_mother_name = '';
//                 $employee->emp_department = '';
//                 // $employee->date_of_birth = $row['EmpDtofBirth'];
//                 $employee->sex = $EmpSex;	
//                 $employee->client_id = '';
//                 $employee->emp_branch = '';
//                 $employee->emp_division = '';
//                 $employee->emp_type = '';
//                 $employee->marital_status = $EmpMaritalStatus;
//                 $employee->designation = $EmpDesgn;
//                 $employee->doj = $EmpDtofJoining;
//                 $employee->uan = $EmpUANNumber;
//                 // $employee->mobile_number = $row['AadharCardNo'];
//                 $employee->pancard_number = $PanCardNo;
//                 $employee->bank_name = $Bankname; 
//                 $employee->ifsc	 = $EmpIFSCcode;
//                 $employee->old_empid = $oldempid;
//                 $employee->bank_ac_no = $EmpBankAcNo; 
//                 $employee->emp_pf_applicable = $EmpPFDeduct;
//                 $employee->emp_pt_applicable = $EmpPTDeduct;
//                 $employee->emp_esi_applicable = $EmpESIDeduct; 
//                 $employee->emp_pf_no = $EmpEpfNo;
//                 $employee->emp_esi_number = $EmpESINo;
//                 $employee->emp_present_address = $EmppresentAddress;
//                 $employee->emp_permanent_address = $EmpPermanentAddress;
//                 // $employee->mobile_number = $row['UnitIDName'];
//                 // $employee->mobile_number = $row['ServiceNo'];
//                 // $employee->mobile_number = $row['Rank'];
//                 if($EmpDtofLeaving == 'NA'){
//                     $employee->is_job_ended = 0;
//                     $employee->end_date = 'Present';
//                 }else{
//                     $employee->is_job_ended = 1;
//                     $employee->end_date = $EmpDtofLeaving;
//                 }
//                 // $employee->mobile_number = $row['Empstatus'];
//                 // $employee->mobile_number = $row['Online'];
//                 // $employee->mobile_number = $row['PSARA'];
//                 $employee->emp_id = $EmpId;
//                 $employee->is_imported_employee = 1;
//                 // $employee->imported_sheet_name = $data['fileName'];
//                 $employee->save();
//             }

//         }
//     }
// }
