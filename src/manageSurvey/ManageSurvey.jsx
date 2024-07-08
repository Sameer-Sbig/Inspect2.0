
import "./ManageSurvey.css"
const ManageSurvey = () => {


    return (
        <div className="container">
         
          <div className="form-container">
            <form>
              <section className="section">
                <h2>PIN Details</h2>
                <div className="form-group">
                  <label>PIN Number*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Decision*</label>
                  <select>
                    <option>Case Recommen</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Remarks*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Documents Uploaded*</label>
                  <select>
                    <option>N</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Document File</label>
                  <input type="file" />
                </div>
                <div className="form-group">
                  <label>Inspection Type*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Inspection Date*</label>
                  <input type="datetime-local" defaultValue="2024-07-05T16:11" />
                </div>
              </section>
    
              <section className="section">
                <h2>Vehicle Details</h2>
                <div className="form-group">
                  <label>Vehicle Classification*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Make*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Model*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Vehicle Subtype*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Registration Number*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Registration Number Format</label>
                  <select>
                    <option>Diplomat</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Engine Number*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Chassis Number*</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Manufacture Year*</label>
                  <input type="text" />
                </div>
              </section>
             
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
}

export default ManageSurvey;