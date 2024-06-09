// import config from "../config/config";
// import { createClient } from "@supabase/supabase-js";

// export class service {
//   client = createClient(config.supabaseUrl, config.supabaseApi);
//   database;
//   storage;

//   async fetchDatabaseData() {
//     const { data, error } = await this.client.from("Tender").select("*");
//     if (data) return data;
//     if (error) console.log(error);
//   }
//   async UploadData(data) {
//     const { error } = await this.client.from("Tender").insert([data]);
//     if (error) console.log(error);
//     window.location.reload();
//   }
//   async deleteSingleData(data) {
//     const { error } = await this.client.from("Tender").delete().eq("id", data);
//     if (error) console.log(error);
//   }
//   async fetchResultData(value) {
//     const { data, error } = await this.client
//       .from("Tender")
//       .select("*")
//       .eq("category", String(value))
//       .order("tender_amount", { ascending: false })
//       .limit(1);
//     if (data) return data;
//     else console.log(error);
//   }
// }

// const Service = new service();
// export default Service;

import { generateClient } from "aws-amplify/data";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

export class service {
  client = generateClient();

  async fetchDatabaseData() {
    const { data, errors } = await this.client.models.Tender.list();
    if (data) return data;
    if (errors) console.log(errors);
  }

  async UploadData(data) {
    const { data: newData, errors } = await this.client.models.Tender.create(
      data
    );
    if (errors) console.log(errors);
    if (newData) window.location.reload();
  }

  async deleteSingleData(data) {
    const { data: deletedData, errors } =
      await this.client.models.Tender.delete({ id: data });
    if (errors) console.log(errors);
  }

  async fetchResultData(value) {
    const { data, errors } = await this.client.models.Tender.list({
      filter: { category: { eq: String(value) } },
      sort: { tender_amount: "DESC" },
      limit: 1,
    });
    if (data) return data;
    if (errors) console.log(errors);
  }
}

const Service = new service();
export default Service;
