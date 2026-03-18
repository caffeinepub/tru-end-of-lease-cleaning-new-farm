import Array "mo:core/Array";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type ServiceType = {
    #residential;
    #commercial;
    #carpetCleaning;
    #windowCleaning;
  };

  type Enquiry = {
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    message : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Int.compare(enquiry1.timestamp, enquiry2.timestamp);
    };
  };

  let enquiries = Map.empty<Time.Time, Enquiry>();

  public shared ({ caller }) func submitEnquiry(
    name : Text,
    phone : Text,
    email : Text,
    serviceType : ServiceType,
    message : Text,
  ) : async () {
    let timestamp = Time.now();
    let enquiry : Enquiry = {
      name;
      phone;
      email;
      serviceType;
      message;
      timestamp;
    };
    enquiries.add(timestamp, enquiry);
  };

  public shared ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (enquiries.isEmpty()) { Runtime.trap("No enquiries found") };
    enquiries.values().toArray().sort();
  };
};
